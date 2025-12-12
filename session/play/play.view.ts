namespace $.$$ {
	export class $bog_quiz_session_play extends $.$bog_quiz_session_play {
		@$mol_mem
		session() {
			const id = this.session_id()
			if (!id) return null
			return this.$.$hyoo_crus_glob.Node($hyoo_crus_ref(id), $bog_quiz_session) as $bog_quiz_session
		}

		@$mol_mem
		participant() {
			// Get current participant from session
			// TODO: Store participant ID in local storage or URL
			const session = this.session()
			if (!session) return null

			const participants_list = session.Participants(null)
			if (!participants_list) return null

			const participants = participants_list.remote_list() ?? []
			return participants[0] as $bog_quiz_participant // Simplified for now
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

		@$mol_mem_key
		option_selected(index: number): boolean {
			// TODO: Track selected options in component state
			return false
		}

		@$mol_mem_key
		option_background(index: number) {
			return this.option_selected(index) ? '#e0f7fa' : 'transparent'
		}

		option_toggle(index: number, event?: Event) {
			// TODO: Implement option selection
			const question = this.current_question()
			if (!question) return event

			const type = question.Type()?.val() || 'single'

			if (type === 'single') {
				// Clear all other selections
			}

			// Toggle this option
			return event
		}

		@$mol_mem
		can_submit() {
			// TODO: Check if at least one option is selected
			return true
		}

		submit_answer(event?: Event) {
			const participant = this.participant()
			if (!participant) return event

			// TODO: Save selected options to participant answers
			participant.update_last_seen()
			return event
		}

		@$mol_mem
		your_answer_text() {
			// TODO: Show which options the participant selected
			return 'Your answer: ...'
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
			// TODO: Calculate score from answers
			return `Your score: 0 points`
		}

		@$mol_mem
		final_score_text() {
			return this.score_text()
		}

		@$mol_mem
		leaderboard_rows() {
			const session = this.session()
			if (!session) return []

			const participants_list = session.Participants(null)
			if (!participants_list) return []

			const participants = participants_list.remote_list() ?? []

			// Sort by score descending
			// TODO: Sort by actual score from answers
			const sorted = [...participants]

			return sorted.map((participant: $bog_quiz_participant, index: number) => {
				return this.Leaderboard_item(index)
			})
		}

		@$mol_mem_key
		leaderboard_item_text(index: number) {
			const session = this.session()
			if (!session) return ''

			const participants_list = session.Participants(null)
			if (!participants_list) return ''

			const participants = participants_list.remote_list() ?? []

			// TODO: Sort by actual score from answers
			const sorted = [...participants]

			const participant = sorted[index] as $bog_quiz_participant
			const name = participant.display_name_text()
			const score = 0 // TODO: Calculate score from answers

			return `${index + 1}. ${name} - ${score} points`
		}
	}
}
