namespace $ {
	/**
	 * Предсобранный moment.js бандл для MAM
	 *
	 * Использование:
	 * const moment = this.$.$bog_quiz_lib_moment
	 * const date = moment().format('DD.MM.YYYY')
	 */
	export const $bog_quiz_lib_moment = require('./moment.bundle.js') as typeof import('moment')
}
