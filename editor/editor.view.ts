namespace $.$$ {
	export class $bog_quiz_editor extends $.$bog_quiz_editor {
		@$mol_mem
		quiz() {
			const id = this.quiz_id()
			if (!id) return null
			return this.$.$giper_baza_glob.Node($giper_baza_link.from(id), $bog_quiz_quiz) as $bog_quiz_quiz
		}

		@$mol_mem
		quiz_title() {
			const quiz = this.quiz()
			if (!quiz) return 'Quiz Editor'
			return quiz.Title(null)?.str() || 'Untitled Quiz'
		}

		quiz_title_value(next?: string) {
			if (next === undefined) {
				return this.quiz_title()
			}

			const quiz = this.quiz()
			if (!quiz) return ''

			quiz.Title(null)!.str(next)
			return next
		}

		add_question(event?: Event) {
			const quiz = this.quiz()
			if (!quiz) return event

			quiz.question_make()
			return event
		}

		@$mol_mem
		question_rows() {
			const quiz = this.quiz()
			if (!quiz) return []

			const questions = quiz.Questions(null)?.remote_list() ?? []

			return questions.map((question: $bog_quiz_question, index: number) => {
				return this.Question_card(index)
			})
		}

		@$mol_mem_key
		question_entity(index: number) {
			const quiz = this.quiz()
			if (!quiz) return null

			const questions = quiz.Questions(null)?.remote_list() ?? []
			return questions[index] as $bog_quiz_question
		}

		@$mol_mem_key
		question_number(index: number) {
			return `Question ${index + 1}`
		}

		@$mol_mem_key
		question_text(index: number, next?: string) {
			const question = this.question_entity(index)
			if (!question) return ''

			if (next !== undefined) {
				question.Text(null)!.str(next)
				return next
			}

			return question.Text(null)?.str() || ''
		}

		@$mol_mem_key
		question_type(index: number, next?: string) {
			const question = this.question_entity(index)
			if (!question) return 'single'

			if (next !== undefined) {
				question.Type(null)!.val(next)
				return next
			}

			return question.Type(null)?.val() || 'single'
		}

		@$mol_action
		question_delete(index: number, event?: Event) {
			const quiz = this.quiz()
			const question = this.question_entity(index)
			if (!quiz || !question) return event

			const questions = quiz.Questions(null)
			if (!questions) return event

			questions.cut(question.link())
			return event
		}

		add_option(index: number, event?: Event) {
			const question = this.question_entity(index)
			if (!question) return event

			question.option_make()
			return event
		}

		@$mol_mem_key
		option_rows(question_index: number) {
			const question = this.question_entity(question_index)
			if (!question) return []

			const options = question.Options(null)?.remote_list() ?? []

			return options.map((option: $bog_quiz_option, option_index: number) => {
				const key = `${question_index}_${option_index}`
				return this.Option_row(key)
			})
		}

		@$mol_mem_key
		option_entity(key: string) {
			const [question_index, option_index] = key.split('_').map(Number)

			const question = this.question_entity(question_index)
			if (!question) return null

			const options = question.Options(null)?.remote_list() ?? []
			return options[option_index] as $bog_quiz_option
		}

		@$mol_mem_key
		option_text(key: string, next?: string) {
			const option = this.option_entity(key)
			if (!option) return ''

			if (next !== undefined) {
				option.Text(null)!.str(next)
				return next
			}

			return option.Text(null)?.str() || ''
		}

		@$mol_mem_key
		option_correct(key: string, next?: boolean) {
			const option = this.option_entity(key)
			if (!option) return false

			if (next !== undefined) {
				const [question_index] = key.split('_').map(Number)
				const question = this.question_entity(question_index)
				const is_single = question?.Type(null)?.val() === 'single'

				// Для single answer - снять галочки с других опций
				if (is_single && next === true) {
					const options = question?.Options(null)?.remote_list() ?? []
					options.forEach((opt: $bog_quiz_option) => {
						if (opt.link().toString() !== option.link().toString()) {
							opt.IsCorrect(null)!.val(false)
						}
					})
				}

				option.IsCorrect(null)!.val(next)
				return next
			}

			return option.IsCorrect(null)?.val() ?? false
		}

		@$mol_action
		option_delete(key: string, event?: Event) {
			const [question_index, option_index] = key.split('_').map(Number)
			const question = this.question_entity(question_index)
			const option = this.option_entity(key)
			if (!question || !option) return event

			const options = question.Options(null)
			if (!options) return event

			options.cut(option.link())
			return event
		}

		@$mol_action
		start_session(event?: Event) {
			console.log('start_session() вызван')
			const quiz = this.quiz()
			console.log('quiz:', quiz)
			if (!quiz) {
				console.log('quiz не найден!')
				return event
			}

			// Проверка, что есть хотя бы один вопрос
			const questions = quiz.Questions(null)?.remote_list() ?? []
			console.log('вопросов:', questions.length)
			if (questions.length === 0) {
				alert('Add at least one question before starting a session')
				return event
			}

			// Получить owner и создать сессию
			const owner = this.$.$giper_baza_glob.home().hall_by($bog_quiz_owner, [])!
			console.log('owner:', owner)
			const session = owner.session_make(quiz)
			console.log('session создана:', session)

			// Навигация на host-экран с префиксом 'host:'
			const session_id = session.link().toString()
			console.log('session_id:', session_id)
			this.$.$mol_state_arg.value('quiz', 'host:' + session_id)
			console.log('Навигация на host:', 'host:' + session_id)

			return event
		}
	}
}
