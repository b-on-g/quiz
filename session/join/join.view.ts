namespace $.$$ {
	export class $bog_quiz_session_join extends $.$bog_quiz_session_join {
		@$mol_mem
		session() {
			const id = this.session_id()
			if (!id) return null
			return this.$.$giper_baza_glob.Node($giper_baza_link.from(id), $bog_quiz_session) as $bog_quiz_session
		}

		@$mol_mem
		quiz_info_text() {
			const session = this.session()
			if (!session) return 'Loading...'

			const quiz = session.Quiz()?.remote()
			const quiz_title = quiz?.Title(null)?.str() || 'Quiz'
			const questions = quiz?.Questions(null)?.remote_list() ?? []

			return `Join "${quiz_title}" (${questions.length} questions)`
		}

		participant_name(next?: string) {
			if (next !== undefined) {
				return next
			}
			return ''
		}

		@$mol_mem
		can_join() {
			return this.participant_name().trim().length > 0
		}

		join(event?: Event) {
			const session = this.session()
			if (!session) return event

			const name = this.participant_name().trim()
			if (!name) return event

			const participant = session.participant_make()
			participant.DisplayName(null)!.str(name)
			participant.UserId(null)!.val(this.$.$giper_baza_glob.home().land().auth().pass().lord().toString())

			// Сохранить ID участника в localStorage
			const session_id = session.link().toString()
			const participant_id = participant.link().toString()
			const key = `quiz_participant_${session_id}`
			localStorage.setItem(key, participant_id)

			// Navigate to play page
			this.$.$mol_state_arg.value('play', session_id)
			return event
		}
	}
}
