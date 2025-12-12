namespace $ {
	/**
	 * Quiz - квиз с вопросами
	 */
	export class $bog_quiz_quiz extends $hyoo_crus_entity.with({
		Title: $hyoo_crus_text,
		Owner: $hyoo_crus_atom_ref_to(() => $bog_quiz_owner),
		Questions: $hyoo_crus_list_ref_to(() => $bog_quiz_question),
		// Дефолтные настройки для всех вопросов
		DefaultQuestionTimer: $hyoo_crus_atom_int,
		DefaultReviewTimer: $hyoo_crus_atom_int,
		DefaultBasePoints: $hyoo_crus_atom_int,
		DefaultWrongPenaltySingle: $hyoo_crus_atom_int,
		DefaultWrongPenaltyMultiPerOption: $hyoo_crus_atom_int,
		DefaultSpeedEnabled: $hyoo_crus_atom_bool,
	}) {
		/**
		 * Создать новый вопрос
		 * Проверяет лимит в 1000 вопросов на владельца
		 */
		@$mol_action
		question_make() {
			const owner = this.Owner()?.remote()
			if (owner && owner.total_questions() >= 1000) {
				throw new Error('Maximum 1000 questions per owner')
			}

			const questions = this.Questions(null)!
			const question = questions.remote_make({ '': $hyoo_crus_rank_read })!

			// Установить порядковый номер
			const order = questions.remote_list().length - 1
			question.Order(null)!.val(BigInt(order))

			return question
		}

		/**
		 * Получить упорядоченный список вопросов
		 */
		@$mol_mem
		questions_ordered() {
			const questions = this.Questions()?.remote_list() ?? []
			return [...questions].sort((a: $bog_quiz_question, b: $bog_quiz_question) => {
				return Number(a.Order()?.val() ?? 0) - Number(b.Order()?.val() ?? 0)
			})
		}

		// TODO: Implement session creation properly
		// For now, sessions should be created through UI
		// @$mol_action
		// session_make() {
		// 	return null as any
		// }
	}
}
