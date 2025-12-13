namespace $.$$ {
	export class $bog_quiz_session_play extends $.$bog_quiz_session_play {
		@$mol_mem
		session() {
			const id = this.session_id()
			if (!id) return null
			return this.$.$hyoo_crus_glob.Node($hyoo_crus_ref(id), $bog_quiz_session) as $bog_quiz_session
		}

		/**
		 * ID текущего участника в localStorage
		 */
		@$mol_mem
		participant_id(next?: string) {
			const session_id = this.session_id()
			const key = `quiz_participant_${session_id}`

			if (next !== undefined) {
				localStorage.setItem(key, next)
				return next
			}

			return localStorage.getItem(key) || ''
		}

		@$mol_mem
		participant() {
			const session = this.session()
			if (!session) return null

			const stored_id = this.participant_id()
			if (!stored_id) return null

			const participants_list = session.Participants(null)
			if (!participants_list) return null

			const participants = participants_list.remote_list() ?? []
			const found = participants.find(p => p.ref().description === stored_id)

			return (found as $bog_quiz_participant) || null
		}

		@$mol_mem
		session_title() {
			const session = this.session()
			if (!session) return 'Play Quiz'

			const quiz = session.Quiz()?.remote()
			const quiz_title = quiz?.Title(null)?.str() || 'Quiz'
			return quiz_title
		}

		@$mol_mem
		state() {
			const session = this.session()
			if (!session) return 'waiting'

			return session.State()?.val() || 'waiting'
		}

		@$mol_mem
		current_question() {
			const session = this.session()
			if (!session) return null

			const quiz = session.Quiz()?.remote()
			if (!quiz) return null

			const questionIndex = Number(session.QuestionIndex()?.val() ?? 0)
			const questions = quiz.questions_ordered()

			return questions[questionIndex] as $bog_quiz_question
		}

		@$mol_mem
		question_text() {
			const question = this.current_question()
			if (!question) return ''

			return question.Text(null)?.str() || 'Loading...'
		}

		@$mol_mem
		timer_text() {
			const session = this.session()
			if (!session) return ''

			const startedAt = Number(session.QuestionStartedAt()?.val() ?? 0)
			if (!startedAt) return ''

			const now = Date.now()
			const elapsed = Math.floor((now - startedAt) / 1000)

			return `Time: ${elapsed}s`
		}

		@$mol_mem
		option_rows() {
			const question = this.current_question()
			if (!question) return []

			const options = question.options_ordered()

			return options.map((option: $bog_quiz_option, index: number) => {
				return this.Option_button(index)
			})
		}

		@$mol_mem_key
		option_entity(index: number) {
			const question = this.current_question()
			if (!question) return null

			const options = question.options_ordered()
			return options[index] as $bog_quiz_option
		}

		@$mol_mem_key
		option_text(index: number) {
			const option = this.option_entity(index)
			if (!option) return ''

			return option.Text(null)?.str() || ''
		}

		/**
		 * Получить текущий ответ участника
		 */
		@$mol_mem
		current_answer() {
			const session = this.session()
			const participant = this.participant()
			if (!session || !participant) return null

			return session.answer_for_participant(participant)
		}

		@$mol_mem_key
		option_selected(index: number): boolean {
			const answer = this.current_answer()
			const option = this.option_entity(index)
			if (!answer || !option) return false

			return answer.is_option_selected(option)
		}

		@$mol_mem_key
		option_background(index: number) {
			const state = this.state()
			const selected = this.option_selected(index)

			if (state === 'review') {
				// В режиме review показываем правильные/неправильные
				const option = this.option_entity(index)
				if (!option) return 'transparent'

				const is_correct = option.IsCorrect()?.val() ?? false
				if (is_correct) return '#4caf50' // Зеленый для правильных
				if (selected && !is_correct) return '#f44336' // Красный для неправильных выбранных
			}

			return selected ? '#e0f7fa' : 'transparent'
		}

		option_toggle(index: number, event?: Event) {
			const state = this.state()
			if (state !== 'question') return event // Можно выбирать только в режиме question

			const answer = this.current_answer()
			const option = this.option_entity(index)
			const question = this.current_question()

			if (!answer || !option || !question) return event

			const type = question.Type()?.val() || 'single'
			const is_single = type === 'single'

			answer.toggle_option(option, is_single)
			return event
		}

		@$mol_mem
		can_submit() {
			const answer = this.current_answer()
			if (!answer) return false

			const selected = answer.selected_option_list()
			return selected.length > 0
		}

		submit_answer(event?: Event) {
			const participant = this.participant()
			if (!participant) return event

			participant.update_last_seen()
			return event
		}

		@$mol_mem
		your_answer_text() {
			const answer = this.current_answer()
			if (!answer) return 'No answer'

			const selected = answer.selected_option_list()
			const texts = selected.map(opt => opt.Text(null)?.str() || '')

			return `Your answer: ${texts.join(', ') || 'None'}`
		}

		@$mol_mem
		correct_answer_text() {
			const question = this.current_question()
			if (!question) return ''

			const correct_options = question.correct_options()
			const texts = correct_options.map((opt: $bog_quiz_option) => opt.Text(null)?.str() || '')

			return `Correct: ${texts.join(', ')}`
		}

		@$mol_mem
		score_text() {
			const session = this.session()
			const answer = this.current_answer()
			if (!session || !answer) return 'Score: 0 points'

			const score = $bog_quiz_scoring.calculate_answer_score(answer, session)
			return `Score: ${Math.round(score)} points`
		}

		@$mol_mem
		final_score_text() {
			const session = this.session()
			const participant = this.participant()
			if (!session || !participant) return 'Total score: 0 points'

			const total = session.participant_total_score(participant)
			return `Total score: ${Math.round(total)} points`
		}

		@$mol_mem
		leaderboard_rows() {
			const session = this.session()
			if (!session) return []

			const leaderboard = session.leaderboard()

			return leaderboard.map((entry, index) => {
				return this.Leaderboard_item(index)
			})
		}

		@$mol_mem_key
		leaderboard_item_text(index: number) {
			const session = this.session()
			if (!session) return ''

			const leaderboard = session.leaderboard()
			if (index >= leaderboard.length) return ''

			const entry = leaderboard[index]
			const participant = entry.participant
			const score = entry.score
			const name = participant.display_name_text()

			// Определить место (с учетом tie)
			let rank = 1
			for (let i = 0; i < index; i++) {
				if (leaderboard[i].score > score) {
					rank = i + 2
				}
			}

			return `${rank}. ${name} - ${Math.round(score)} points`
		}
	}
}
