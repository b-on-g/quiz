namespace $.$$ {
	export class $bog_quiz_home extends $.$bog_quiz_home {
		@$mol_action
		create(event?: Event) {
			console.log('create() вызван')

			// Создать новый квиз и перейти в редактор
			const owner = this.$.$hyoo_crus_glob.home().hall_by($bog_quiz_owner, {})!
			console.log('owner:', owner)

			const quiz = owner.quiz_make()
			console.log('quiz создан:', quiz)

			const quiz_id = quiz.land().ref().description!
			console.log('quiz_id:', quiz_id)

			this.$.$mol_state_arg.value('quiz', quiz_id)
			console.log('Навигация на quiz:', quiz_id)

			return event
		}

		quizzes(event?: Event) {
			// Перейти на страницу списка квизов
			this.$.$mol_state_arg.value('list', 'true')
			return event
		}
	}
}
