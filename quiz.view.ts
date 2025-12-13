namespace $.$$ {
	// Инициализация GiperBase и настройка синхронизации
	new $mol_after_frame(() => {
		$hyoo_crus_yard.masters = ['https://crus.hd4.ru/']
		$hyoo_crus_glob.yard().sync()
	})

	export class $bog_quiz extends $.$bog_quiz {
		/**
		 * Профиль текущего пользователя (Owner)
		 */
		@$mol_mem
		profile() {
			return this.$.$hyoo_crus_glob.home().hall_by($bog_quiz_owner, {})
		}

		override pages(): readonly any[] {
			const pages: any[] = [this.Home()]

			// Добавляем страницы в зависимости от параметров URL
			const list = this.arg('list')
			if (list) {
				pages.push(this.Quiz_list())
			}

			const quiz_id = this.arg('quiz')
			if (quiz_id) {
				pages.push(this.Quiz_editor(quiz_id))
			}

			const host_id = this.arg('host')
			if (host_id) {
				pages.push(this.Session_host(host_id))
			}

			const join_id = this.arg('join')
			if (join_id) {
				pages.push(this.Session_join(join_id))
			}

			const play_id = this.arg('play')
			if (play_id) {
				pages.push(this.Session_play(play_id))
			}

			return pages
		}
	}
}
