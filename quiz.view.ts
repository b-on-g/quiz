namespace $.$$ {
	// Инициализация Giper Baza и настройка синхронизации
	new $mol_after_frame(() => {
		$giper_baza_yard.masters = ['https://crus.hd4.ru/']
		// $giper_baza_glob.yard().sync()
	})

	export class $bog_quiz extends $.$bog_quiz {
		/**
		 * Профиль текущего пользователя (Owner)
		 */
		@$mol_mem
		profile() {
			this.npm_libs_example()
			return this.$.$giper_baza_glob.home().hall_by($bog_quiz_owner, null)
		}

		/**
		 * Пример использования NPM библиотек
		 */
		@$mol_mem
		npm_libs_example() {
			// Lodash - утилиты для работы с массивами и объектами
			const _ = this.$.$bog_quiz_lib.lodash()
			console.log('\n🔧 Lodash:')
			console.log('  shuffle([1,2,3,4,5]):', _.shuffle([1, 2, 3, 4, 5]))
			console.log('  uniq([1,2,2,3,3]):', _.uniq([1, 2, 2, 3, 3]))
			console.log('  chunk([1,2,3,4,5], 2):', _.chunk([1, 2, 3, 4, 5], 2))

			// Moment.js - работа с датами
			const moment = this.$.$bog_quiz_lib.moment()
			const now = moment()
			console.log('\n📅 Moment.js:')
			console.log('  format("DD.MM.YYYY HH:mm"):', now.format('DD.MM.YYYY HH:mm'))
			console.log('  fromNow() -1 день:', moment().subtract(1, 'day').fromNow())
			console.log('  fromNow() +3 часа:', moment().add(3, 'hours').fromNow())

			// Axios - HTTP клиент
			const axios = this.$.$bog_quiz_lib.axios()
			console.log('\n🌐 Axios:')
			console.log('  axios.get:', typeof axios.get)
			console.log('  axios.post:', typeof axios.post)

			// Пример реального запроса (раскомментируйте при необходимости)
			// axios.get('https://api.github.com/users/github')
			// 	.then(response => console.log('GitHub API:', response.data))
			// 	.catch(error => console.log('Ошибка:', error.message))

			console.log('\n✨ Все библиотеки загружены и работают!\n')

			return true
		}

		@$mol_mem
		quiz_id(next?: string) {
			const id = this.$.$mol_state_arg.value('quiz', next)
			return id || null
		}

		@$mol_mem
		spread_ids() {
			const owner = this.profile()
			if (!owner) return []
			return (
				owner
					.Quizzes()
					?.remote_list()
					.map(quiz => quiz.link().toString()) ?? []
			)
		}

		@$mol_mem_key
		spread_key(id: string) {
			return id
		}

		@$mol_mem_key
		quiz(id: string) {
			return this.$.$giper_baza_glob.Node(new $giper_baza_link(id), $bog_quiz_quiz)
		}

		@$mol_action
		quiz_add(event?: Event) {
			const owner = this.profile()!
			const quiz = owner.quiz_make()
			this.quiz_id(quiz.link().toString())
			return event
		}

		// Определяем, какой компонент показать для данного ID
		@$mol_mem_key
		Quiz_spread(id: string) {
			// Если ID начинается с 'host:', показываем host компонент
			if (id.startsWith('host:')) {
				const session_id = id.substring(5) // Убираем префикс 'host:'
				const host = new this.$.$bog_quiz_session_host()
				host.session_id = () => session_id
				return host
			}

			// Иначе показываем редактор квиза
			const editor = new this.$.$bog_quiz_editor()
			editor.quiz_id = () => id
			editor.realm = () => this.Realm()
			return editor
		}
	}
}
