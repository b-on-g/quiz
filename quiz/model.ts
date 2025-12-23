namespace $ {
	/**
	 * Quiz - квиз с вопросами
	 */
	export class $bog_quiz_quiz extends $giper_baza_entity.with({
		Title: $giper_baza_text,
		Owner: $giper_baza_atom_link_to(() => $bog_quiz_owner),
		Questions: $giper_baza_list_link_to(() => $bog_quiz_question),
		// Дефолтные настройки для всех вопросов
		DefaultQuestionTimer: $giper_baza_atom_bint,
		DefaultReviewTimer: $giper_baza_atom_bint,
		DefaultBasePoints: $giper_baza_atom_bint,
		DefaultWrongPenaltySingle: $giper_baza_atom_bint,
		DefaultWrongPenaltyMultiPerOption: $giper_baza_atom_bint,
		DefaultSpeedEnabled: $giper_baza_atom_bool,
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
			const question = questions.make([[null, $giper_baza_rank_read]])!

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
