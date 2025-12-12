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

		override pages() {
			return [this.Home()]
		}
	}
}
