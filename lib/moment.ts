namespace $ {
	/**
	 * Предсобранный moment.js бандл для MAM
	 *
	 * Использование:
	 * const moment = this.$.$bog_quiz_lib_moment()
	 * const date = moment.format('DD.MM.YYYY')
	 */
	export class $bog_quiz_lib_moment extends $mol_object2 {
		@$mol_mem
		static lib() {
			// Загружаем бандл как скрипт
			$mol_import.script('bog/quiz/lib/moment.bundle.js')
			// Момент создает глобальную переменную window.moment
			return (globalThis as any).moment as typeof import('moment')
		}
	}
}
