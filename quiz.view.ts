namespace $.$$ {
	// Инициализация Giper Baza и настройка синхронизации
	new $mol_after_frame(() => {
		$giper_baza_yard.masters = ['https://crus.hd4.ru/']
		$giper_baza_glob.yard().sync()
	})

	export class $bog_quiz extends $.$bog_quiz {
		/**
		 * Профиль текущего пользователя (Owner)
		 */
		@$mol_mem
		profile() {
			return this.$.$giper_baza_glob.home().hall_by($bog_quiz_owner, [])
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
			return this.$.$giper_baza_glob.Node($giper_baza_link.from(id), $bog_quiz_quiz)
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
