namespace $ {
	/**
	 * Универсальный доступ к предсобранным NPM библиотекам для bog/quiz
	 *
	 * Использование:
	 * const axios = this.$.$bog_quiz_lib.axios()
	 * const _ = this.$.$bog_quiz_lib.lodash()
	 * const moment = this.$.$bog_quiz_lib.moment()
	 *
	 * Для добавления новой библиотеки:
	 * 1. Добавить в bog/quiz/bundles/package.json
	 * 2. Добавить конфигурацию в bog/quiz/bundles/build-all.js
	 * 3. Запустить: cd bundles && npm install && npm run build
	 * 4. Добавить метод в этот класс
	 */
	export class $bog_quiz_lib extends $mol_object2 {
		/**
		 * Axios - HTTP клиент для запросов к API
		 *
		 * @example
		 * const axios = this.$.$bog_quiz_lib.axios()
		 * const response = await axios.get('https://api.example.com/data')
		 * const { data } = await axios.post('/api/users', { name: 'John' })
		 */
		@$mol_mem
		static axios() {
			$mol_import.script('bog/quiz/lib/axios.bundle.js')
			return (globalThis as any).axios as typeof import('axios')
		}

		/**
		 * Lodash - утилиты для работы с массивами, объектами и строками
		 *
		 * @example
		 * const _ = this.$.$bog_quiz_lib.lodash()
		 * const shuffled = _.shuffle([1, 2, 3, 4, 5])
		 * const unique = _.uniq([1, 2, 2, 3, 3])
		 * const chunks = _.chunk(array, 2)
		 */
		@$mol_mem
		static lodash() {
			$mol_import.script('bog/quiz/lib/lodash.bundle.js')
			return (globalThis as any)._ as typeof import('lodash')
		}

		/**
		 * Moment.js - работа с датами и временем
		 *
		 * @example
		 * const moment = this.$.$bog_quiz_lib.moment()
		 * const now = moment().format('DD.MM.YYYY HH:mm:ss')
		 * const relative = moment(date).fromNow()
		 * const diff = moment(end).diff(start, 'days')
		 */
		@$mol_mem
		static moment() {
			$mol_import.script('bog/quiz/lib/moment.bundle.js')
			return (globalThis as any).moment as typeof import('moment')
		}

		/**
		 * Список всех доступных библиотек
		 */
		static get libraries() {
			return {
				axios: 'HTTP клиент для запросов к API',
				lodash: 'Утилиты для работы с массивами, объектами и строками',
				moment: 'Работа с датами и временем',
			} as const
		}
	}
}
