namespace $.$$ {
	export class $bog_quiz_list extends $.$bog_quiz_list {
		@$mol_mem
		owner() {
			return this.$.$hyoo_crus_glob.home().hall_by($bog_quiz_owner, {})
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

			const quizzes_list = owner.Quizzes(null)
			if (!quizzes_list) return []

			const quizzes = quizzes_list.remote_list()

			return quizzes.map((quiz: $bog_quiz_quiz, index: number) => {
				return this.Quiz_card(index)
			})
		}

		@$mol_mem_key
		quiz_entity(index: number) {
			const owner = this.owner()
			if (!owner) return null as any

			const quizzes_list = owner.Quizzes(null)
			if (!quizzes_list) return null as any

			const quizzes = quizzes_list.remote_list()
			if (!quizzes) return null as any
			return quizzes[index] as $bog_quiz_quiz
		}

		@$mol_mem_key
		quiz_title(index: number) {
			const quiz = this.quiz_entity(index)
			return quiz.Title(null)?.str() || 'Untitled Quiz'
		}

		@$mol_mem_key
		quiz_link(index: number) {
			const quiz = this.quiz_entity(index)
			return quiz.land().ref().description!
		}

		@$mol_mem_key
		quiz_questions_count(index: number) {
			const quiz = this.quiz_entity(index)
			const questions = quiz.Questions(null)?.remote_list() ?? []
			return `${questions.length} questions`
		}

		quiz_delete(index: number, event?: Event) {
			const quiz = this.quiz_entity(index)
			// TODO: Implement proper deletion
			return event
		}
	}
}
