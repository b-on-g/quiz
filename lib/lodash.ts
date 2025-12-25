namespace $ {
	/**
	 * Предсобранный lodash бандл для MAM
	 *
	 * Использование:
	 * const _ = this.$.$bog_quiz_lib_lodash.lib()
	 * const shuffled = _.shuffle([1, 2, 3, 4, 5])
	 * const unique = _.uniq([1, 2, 2, 3, 3])
	 */
	export class $bog_quiz_lib_lodash extends $mol_object2 {
		@$mol_mem
		static lib() {
			// Загружаем бандл как скрипт
			$mol_import.script('bog/quiz/lib/lodash.bundle.js')

			// Lodash создает глобальную переменную window._
			return (globalThis as any)._ as typeof import('lodash')
		}
	}
}
