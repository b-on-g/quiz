namespace $.$$ {
	export class $bog_quiz_session_play extends $.$bog_quiz_session_play {

		session() {
			const id = this.session_id()
			if (!id) return null
			return this.$.$giper_baza_glob.Pawn(new $giper_baza_link(id), $bog_quiz_session) as $bog_quiz_session
		}

		@$mol_mem
		lord_id() {
			return this.$.$giper_baza_auth.current().pass().lord().toString()
		}

		@$mol_mem
		participant() {
			const session = this.session()
			if (!session) return null

			const lord = this.lord_id()
			const participants = session.participant_list()

			return (participants.find(p => p.UserId(null)?.val() === lord) as $bog_quiz_participant) ?? null
		}

		@$mol_mem
		session_title() {
			const session = this.session()
			if (!session) return 'Play Quiz'

			const quiz = session.Quiz(null)?.remote()
			return quiz?.Title(null)?.str() || 'Quiz'
		}

		@$mol_mem
		state_body() {
			const s = this.state()
			switch (s) {
				case 'question': return [this.Question_view()]
				case 'review': return [this.Review_view()]
				case 'finished': return [this.Finished_view()]
				default: return [this.Waiting_view()]
			}
		}

		@$mol_mem
		state() {
			const session = this.session()
			if (!session) return 'waiting'

			return session.State(null)?.val() || 'waiting'
		}

		@$mol_mem
		current_question() {
			const session = this.session()
			if (!session) return null

			return session.current_question() as $bog_quiz_question | null
		}

		@$mol_mem
		question_text() {
			const question = this.current_question()
			if (!question) return ''

			return question.Text(null)?.str() || ''
		}

		@$mol_mem
		timer_text() {
			const session = this.session()
			if (!session) return ''

			const startedAt = Number(session.QuestionStartedAt(null)?.val() ?? 0)
			if (!startedAt) return ''

			const timerSec = Number(session.QuestionTimerSec(null)?.val() ?? 30)
			const elapsed = Math.floor((Date.now() - startedAt) / 1000)
			const remaining = Math.max(0, timerSec - elapsed)

			return `${remaining}s`
		}

		@$mol_mem
		option_rows() {
			const question = this.current_question()
			if (!question) return []

			const options = question.options_ordered()
			return options.map((_: any, index: number) => this.Option_button(index))
		}

		@$mol_mem_key
		option_entity(index: number) {
			const question = this.current_question()
			if (!question) return null

			return question.options_ordered()[index] as $bog_quiz_option
		}

		@$mol_mem_key
		option_text(index: number) {
			const option = this.option_entity(index)
			return option?.Text(null)?.str() || ''
		}

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
				const option = this.option_entity(index)
				if (!option) return 'transparent'

				const is_correct = option.IsCorrect(null)?.val() ?? false
				if (is_correct) return '#4caf50'
				if (selected && !is_correct) return '#f44336'
			}

			return selected ? '#2196f3' : 'transparent'
		}

		option_toggle(index: number, event?: Event) {
			if (this.state() !== 'question') return event

			const answer = this.current_answer()
			const option = this.option_entity(index)
			const question = this.current_question()

			if (!answer || !option || !question) return event

			const type = question.Type(null)?.val() || 'single'
			answer.toggle_option(option, type === 'single')
			return event
		}

		@$mol_mem
		can_submit() {
			const answer = this.current_answer()
			if (!answer) return false

			return answer.selected_option_list().length > 0
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

			const correct = question.correct_options()
			const texts = correct.map((opt: $bog_quiz_option) => opt.Text(null)?.str() || '')

			return `Correct: ${texts.join(', ')}`
		}

		@$mol_mem
		score_text() {
			const session = this.session()
			const answer = this.current_answer()
			if (!session || !answer) return 'Score: 0'

			const score = $bog_quiz_scoring.calculate_answer_score(answer, session)
			return `Score: ${Math.round(score)}`
		}

		@$mol_mem
		final_score_text() {
			const session = this.session()
			const participant = this.participant()
			if (!session || !participant) return 'Total: 0'

			const total = session.participant_total_score(participant)
			return `Total: ${Math.round(total)}`
		}

		@$mol_mem
		leaderboard_rows() {
			const session = this.session()
			if (!session) return []

			const leaderboard = session.leaderboard()
			return leaderboard.map((_: any, index: number) => this.Leaderboard_item(index))
		}

		@$mol_mem_key
		leaderboard_item_text(index: number) {
			const session = this.session()
			if (!session) return ''

			const leaderboard = session.leaderboard()
			if (index >= leaderboard.length) return ''

			const entry = leaderboard[index]
			const name = entry.participant.display_name_text()
			const score = entry.score

			let rank = 1
			for (let i = 0; i < index; i++) {
				if (leaderboard[i].score > score) {
					rank = i + 2
				}
			}

			return `${rank}. ${name} - ${Math.round(score)}`
		}
	}
}
