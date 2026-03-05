namespace $.$$ {
	export class $bog_quiz_session_host extends $.$bog_quiz_session_host {
		@$mol_mem
		session() {
			const id = this.session_id()
			if (!id) return null
			return this.$.$giper_baza_glob.Pawn(new $giper_baza_link(id), $bog_quiz_session) as $bog_quiz_session
		}

		@$mol_mem
		session_title() {
			const session = this.session()
			if (!session) return 'Host Session'

			const quiz = session.Quiz()?.remote()
			const quiz_title = quiz?.Title(null)?.str() || 'Quiz'
			return `Host: ${quiz_title}`
		}

		@$mol_mem
		state_text() {
			const session = this.session()
			if (!session) return 'Loading...'

			const state = session.State()?.val() || 'waiting'
			const stateNames: Record<string, string> = {
				waiting: 'Waiting for participants',
				question: 'Question in progress',
				review: 'Reviewing answers',
				finished: 'Quiz finished',
			}

			return stateNames[state] || state
		}

		@$mol_mem
		join_uri() {
			const session = this.session()
			if (!session) return ''

			const session_id = session.link().toString()
			return `${window.location.origin}${window.location.pathname}?session=${session_id}&join`
		}

		@$mol_mem
		participant_rows() {
			const session = this.session()
			if (!session) return []

			const participants_list = session.Participants(null)
			if (!participants_list) return []

			const participants = participants_list.remote_list() ?? []

			return participants.map((participant: $bog_quiz_participant, index: number) => {
				return this.Participant_card(index)
			})
		}

		@$mol_mem_key
		participant_entity(index: number) {
			const session = this.session()
			if (!session) return null

			const participants_list = session.Participants(null)
			if (!participants_list) return null

			const participants = participants_list.remote_list() ?? []
			return participants[index] as $bog_quiz_participant
		}

		@$mol_mem_key
		participant_name(index: number) {
			const participant = this.participant_entity(index)
			if (!participant) return 'Unknown'

			return participant.display_name_text()
		}

		@$mol_mem_key
		participant_status_text(index: number) {
			const participant = this.participant_entity(index)
			if (!participant) return ''

			const session = this.session()
			if (!session) return ''

			const state = session.State()?.val()

			if (state === 'question') {
				// TODO: Check if participant has answered
				return 'Waiting for answer'
			}

			return 'Waiting'
		}

		@$mol_mem
		can_start() {
			const session = this.session()
			if (!session) return false

			const state = session.State()?.val()
			return state === 'waiting'
		}

		@$mol_mem
		can_next() {
			const session = this.session()
			if (!session) return false

			const state = session.State()?.val()
			return state === 'question' || state === 'review'
		}

		@$mol_mem
		can_end() {
			const session = this.session()
			if (!session) return false

			const state = session.State()?.val()
			return state !== 'finished'
		}

		@$mol_mem
		next_button_title() {
			const session = this.session()
			if (!session) return 'Next'

			const state = session.State()?.val()
			if (state === 'question') return 'Show Results'
			if (state === 'review') return 'Next Question'

			return 'Next'
		}

		start(event?: Event) {
			const session = this.session()
			if (!session) return event

			session.start()
			return event
		}

		next(event?: Event) {
			const session = this.session()
			if (!session) return event

			session.next()
			return event
		}

		end(event?: Event) {
			const session = this.session()
			if (!session) return event

			session.end()
			return event
		}
	}
}
