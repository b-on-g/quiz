namespace $ {
	/**
	 * Session - игровая сессия квиза
	 */
	export class $bog_quiz_session extends $giper_baza_entity.with({
		Quiz: $giper_baza_atom_link_to(() => $bog_quiz_quiz),
		Host: $giper_baza_atom_link_to(() => $bog_quiz_owner),
		State: $giper_baza_atom_text, // 'waiting' | 'question' | 'review' | 'finished'
		QuestionIndex: $giper_baza_atom_bint,
		QuestionStartedAt: $giper_baza_atom_bint, // timestamp
		ReviewStartedAt: $giper_baza_atom_bint, // timestamp
		Participants: $giper_baza_list_link_to(() => $bog_quiz_participant),
		Answers: $giper_baza_list_link_to(() => $bog_quiz_answer),
		ReactionEvents: $giper_baza_list_link_to(() => $bog_quiz_reaction),
		// Настройки сессии
		QuestionTimerSec: $giper_baza_atom_bint,
		ReviewTimerSec: $giper_baza_atom_bint,
		ShowStats: $giper_baza_atom_bool,
		ReactionsEnabled: $giper_baza_atom_bool,
		LeaderboardEnabled: $giper_baza_atom_bool,
		SpeedKMax: $giper_baza_atom_real,
		SpeedKMin: $giper_baza_atom_real,
		SpeedSkipSec: $giper_baza_atom_bint,
	}) {
		/**
		 * Получить текущий вопрос
		 */
		@$mol_mem
		current_question() {
			const quiz = this.Quiz()?.remote()
			if (!quiz) return null

			const index = Number(this.QuestionIndex()?.val() ?? 0)
			const questions = quiz.questions_ordered()

			return questions[index] ?? null
		}

		/**
		 * Запустить игру (waiting -> question)
		 */
		@$mol_action
		start() {
			this.State(null)!.val('question')
			this.QuestionIndex(null)!.val(BigInt(0))
			this.QuestionStartedAt(null)!.val(BigInt(Date.now()))
		}

		/**
		 * Перейти к следующему вопросу или review
		 */
		@$mol_action
		next() {
			const state = this.State()?.val()

			if (state === 'question') {
				// Фиксируем ответы и переходим к review
				this.finalize_answers()
				this.State(null)!.val('review')
				this.ReviewStartedAt(null)!.val(BigInt(Date.now()))
			} else if (state === 'review') {
				// Переходим к следующему вопросу
				const quiz = this.Quiz()?.remote()
				if (!quiz) return

				const currentIndex = Number(this.QuestionIndex()?.val() ?? 0)
				const totalQuestions = quiz.questions_ordered().length

				if (currentIndex + 1 < totalQuestions) {
					// Есть еще вопросы
					this.State(null)!.val('question')
					this.QuestionIndex(null)!.val(BigInt(currentIndex + 1))
					this.QuestionStartedAt(null)!.val(BigInt(Date.now()))
				} else {
					// Вопросы закончились
					this.end()
				}
			}
		}

		/**
		 * Завершить игру
		 */
		@$mol_action
		end() {
			this.State(null)!.val('finished')
		}

		/**
		 * Зафиксировать все ответы на текущий вопрос
		 */
		@$mol_action
		finalize_answers() {
			const question = this.current_question()
			if (!question) return

			const now = BigInt(Date.now())
			const answers = this.Answers()?.remote_list() ?? []

			answers.forEach(answer => {
				const answerQuestion = answer.Question()?.remote()
				if (answerQuestion?.link().toString() === question.link().toString()) {
					// Если FinalAt еще не установлен, устанавливаем
					if (!answer.FinalAt()?.val()) {
						answer.FinalAt(null)!.val(now)
					}
				}
			})
		}

		/**
		 * Получить список участников
		 */
		@$mol_mem
		participant_list() {
			return this.Participants()?.remote_list() ?? []
		}

		@$mol_action
		participant_make() {
			const participants = this.Participants(null)!
			const participant = participants.make([
				[null, $giper_baza_rank_read],
			])!

			participant.update_last_seen()

			return participant
		}

		@$mol_mem_key
		answer_for_participant(participant: $bog_quiz_participant) {
			const question = this.current_question()
			if (!question) return null

			const answers_list = this.Answers(null)!
			const existing_answers = answers_list.remote_list()

			const q_link = question.link().toString()
			const p_link = participant.link().toString()

			const existing = existing_answers.find(ans => {
				return (
					ans.Question()?.remote()?.link().toString() === q_link &&
					ans.Participant()?.remote()?.link().toString() === p_link
				)
			})

			if (existing) return existing as $bog_quiz_answer

			const answer = answers_list.make([
				[null, $giper_baza_rank_read],
			])!
			answer.Session(null)!.remote(this)
			answer.Question(null)!.remote(question)
			answer.Participant(null)!.remote(participant)
			answer.UpdatedAt(null)!.val(BigInt(Date.now()))

			return answer
		}

		/**
		 * Получить общий счет участника
		 */
		@$mol_mem_key
		participant_total_score(participant: $bog_quiz_participant) {
			return $bog_quiz_scoring.calculate_participant_total_score(participant, this)
		}

		/**
		 * Получить отсортированный рейтинг участников
		 */
		@$mol_mem
		leaderboard() {
			const participants = this.participant_list()

			// Рассчитать очки для каждого участника
			const with_scores = participants.map(p => ({
				participant: p,
				score: this.participant_total_score(p),
			}))

			// Сортировать по убыванию очков
			with_scores.sort((a, b) => b.score - a.score)

			return with_scores
		}
	}
}
