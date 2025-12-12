namespace $.$$ {
	export class $bog_quiz_session_join extends $.$bog_quiz_session_join {
		@$mol_mem
		session() {
			const id = this.session_id()
			if (!id) return null
			return this.$.$hyoo_crus_glob.Node($hyoo_crus_ref(id), $bog_quiz_session) as $bog_quiz_session
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

			// Navigate to play page
			const session_id = session.land().ref().description!
			this.$.$mol_state_arg.value('play', session_id)
			return event
		}
	}
}
