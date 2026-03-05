namespace $.$$ {
	export class $bog_quiz_list extends $.$bog_quiz_list {

		owner() {
			return this.$.$giper_baza_glob.home() as unknown as $bog_quiz_owner
		}

		create(event?: Event) {
			const owner = this.owner()
			if (owner) owner.quiz_make()
			return event
		}

		@$mol_mem
		quiz_rows() {
			const owner = this.owner()
			if (!owner) return []

			const quizzes = owner.Quizzes(null)?.remote_list() ?? []

			return quizzes.map((_: any, index: number) => this.Quiz_card(index))
		}

		@$mol_mem_key
		quiz_entity(index: number) {
			const owner = this.owner()
			if (!owner) return null

			const quizzes = owner.Quizzes(null)?.remote_list() ?? []
			return (quizzes[index] as $bog_quiz_quiz) ?? null
		}

		@$mol_mem_key
		quiz_title(index: number) {
			const quiz = this.quiz_entity(index)
			return quiz?.Title(null)?.str() || 'Untitled Quiz'
		}

		@$mol_mem_key
		quiz_link(index: number) {
			const quiz = this.quiz_entity(index)
			return quiz?.link().toString() ?? ''
		}

		@$mol_mem_key
		quiz_questions_count(index: number) {
			const quiz = this.quiz_entity(index)
			const questions = quiz?.Questions(null)?.remote_list() ?? []
			return `${questions.length} questions`
		}

		@$mol_action
		quiz_delete(index: number, event?: Event) {
			const quiz = this.quiz_entity(index)
			const owner = this.owner()
			if (!quiz || !owner) return event

			owner.quiz_delete(quiz)
			return event
		}
	}
}
