namespace $ {
	/**
	 * Session - игровая сессия квиза
	 */
	export class $bog_quiz_session extends $hyoo_crus_entity.with({
		Quiz: $hyoo_crus_atom_ref_to(() => $bog_quiz_quiz),
		Host: $hyoo_crus_atom_ref_to(() => $bog_quiz_owner),
		State: $hyoo_crus_atom_str, // 'waiting' | 'question' | 'review' | 'finished'
		QuestionIndex: $hyoo_crus_atom_int,
		QuestionStartedAt: $hyoo_crus_atom_int, // timestamp
		ReviewStartedAt: $hyoo_crus_atom_int, // timestamp
		Participants: $hyoo_crus_list_ref_to(() => $bog_quiz_participant),
		Answers: $hyoo_crus_list_ref_to(() => $bog_quiz_answer),
		ReactionEvents: $hyoo_crus_list_ref_to(() => $bog_quiz_reaction),
		// Настройки сессии
		QuestionTimerSec: $hyoo_crus_atom_int,
		ReviewTimerSec: $hyoo_crus_atom_int,
		ShowStats: $hyoo_crus_atom_bool,
		ReactionsEnabled: $hyoo_crus_atom_bool,
		LeaderboardEnabled: $hyoo_crus_atom_bool,
		SpeedKMax: $hyoo_crus_atom_real,
		SpeedKMin: $hyoo_crus_atom_real,
		SpeedSkipSec: $hyoo_crus_atom_int,
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
				if (answerQuestion?.ref().description === question.ref().description) {
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

		/**
		 * Создать нового участника
		 */
		@$mol_action
		participant_make() {
			const participants = this.Participants(null)!
			const participant = participants.remote_make({ '': $hyoo_crus_rank_read })!

			participant.update_last_seen()

			return participant
		}
	}
}
