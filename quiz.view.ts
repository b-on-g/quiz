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

		@$mol_mem
		quiz_id(next?: $hyoo_crus_ref) {
			const id = this.$.$mol_state_arg.value('quiz', next?.description)
			if (!id) return null
			return $hyoo_crus_ref(id)
		}

		@$mol_mem
		spread_ids() {
			const owner = this.profile()
			if (!owner) return []
			return (
				owner
					.Quizzes()
					?.remote_list()
					.map(quiz => quiz.ref().description!) ?? []
			)
		}

		@$mol_mem_key
		spread_key(id: string) {
			return id
		}

		@$mol_mem_key
		quiz(id: string) {
			return this.$.$hyoo_crus_glob.Node($hyoo_crus_ref(id), $bog_quiz_quiz)
		}
	}
}
