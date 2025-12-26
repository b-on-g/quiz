namespace $ {
	export class $bog_quiz_lib extends $mol_object2 {
		@$mol_mem
		static lodash() {
			$mol_import.script('bog/quiz/lib/lodash.bundle.js')
			return (globalThis as any)._
		}

		@$mol_mem
		static axios() {
			$mol_import.script('bog/quiz/lib/axios.bundle.js')
			return (globalThis as any).axios
		}

		@$mol_mem
		static moment() {
			$mol_import.script('bog/quiz/lib/moment.bundle.js')
			return (globalThis as any).moment
		}

		static get libraries() {
			return {
				lodash: 'Утилиты для работы с массивами, объектами и строками',
				moment: 'Работа с датами и временем',
			} as const
		}
	}
}
