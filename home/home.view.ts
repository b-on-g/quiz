namespace $.$$ {
	export class $bog_quiz_home extends $.$bog_quiz_home {
		create(event?: Event) {
			// Создать новый квиз и перейти в редактор
			const owner = this.$.$hyoo_crus_glob.home().hall_by($bog_quiz_owner, {})
			if (!owner) return event

			const quiz = owner.quiz_make()
			const quiz_id = quiz.land().ref().description!

			this.$.$mol_state_arg.value('quiz', quiz_id)
			return event
		}

		quizzes(event?: Event) {
			// Перейти на страницу списка квизов
			this.$.$mol_state_arg.value('list', 'true')
			return event
		}
	}
}
