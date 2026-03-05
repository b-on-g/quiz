namespace $.$$ {
	export class $bog_quiz_session_join extends $.$bog_quiz_session_join {

		session() {
			const id = this.session_id()
			if (!id) return null
			return this.$.$giper_baza_glob.Pawn(new $giper_baza_link(id), $bog_quiz_session) as $bog_quiz_session
		}

		@$mol_mem
		quiz_info_text() {
			const session = this.session()
			if (!session) return 'Loading...'

			const quiz = session.Quiz(null)?.remote()
			const quiz_title = quiz?.Title(null)?.str() || 'Quiz'
			const questions = quiz?.Questions(null)?.remote_list() ?? []

			return `"${quiz_title}" (${questions.length} questions)`
		}

		@$mol_mem
		can_join() {
			return this.participant_name().trim().length > 0
		}

		@$mol_action
		join(event?: Event) {
			const session = this.session()
			if (!session) return event

			const name = this.participant_name().trim()
			if (!name) return event

			const sid = this.session_id()
			const lord_id = this.$.$giper_baza_auth.current().pass().lord().toString()

			// Check if already joined
			const existing = session.participant_list().find(
				p => p.UserId(null)?.val() === lord_id
			)

			if (!existing) {
				const participant = session.participant_make()
				participant.DisplayName(null)!.str(name)
				participant.UserId(null)!.val(lord_id)
				participant.JoinedAt(null)!.val(BigInt(Date.now()))
			}

			// Navigate to play page
			this.$.$mol_state_arg.value('session', null)
			this.$.$mol_state_arg.value('join', null)
			this.$.$mol_state_arg.value('play', sid)
			return event
		}
	}
}
