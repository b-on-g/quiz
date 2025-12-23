namespace $ {
	/**
	 * Question - вопрос в квизе
	 */
	export class $bog_quiz_question extends $giper_baza_entity.with({
		Text: $giper_baza_text,
		Type: $giper_baza_atom_text, // 'single' или 'multi'
		Order: $giper_baza_atom_bint,
		Options: $giper_baza_list_link_to(() => $bog_quiz_option),
		// Параметры начисления очков (переопределяют дефолтные из Quiz)
		BasePoints: $giper_baza_atom_bint,
		WrongPenaltySingle: $giper_baza_atom_bint,
		WrongPenaltyMultiPerOption: $giper_baza_atom_bint,
		SpeedEnabled: $giper_baza_atom_bool,
	}) {
		/**
		 * Создать новый вариант ответа
		 * Проверяет лимит в 50 вариантов на вопрос
		 */
		@$mol_action
		option_make() {
			const options = this.Options(null)!
			const count = options.remote_list().length

			if (count >= 50) {
				throw new Error('Maximum 50 options per question')
			}

			const option = options.make([[null, $giper_baza_rank_read]])!

			// Установить порядковый номер
			const order = count
			option.Order(null)!.val(BigInt(order))

			return option
		}

		/**
		 * Получить упорядоченный список вариантов
		 */
		@$mol_mem
		options_ordered() {
			const options = this.Options()?.remote_list() ?? []
			return [...options].sort((a: $bog_quiz_option, b: $bog_quiz_option) => {
				return Number(a.Order()?.val() ?? 0) - Number(b.Order()?.val() ?? 0)
			})
		}

		/**
		 * Получить правильные варианты ответа
		 */
		@$mol_mem
		correct_options() {
			return this.options_ordered().filter((opt: $bog_quiz_option) => opt.IsCorrect()?.val() ?? false)
		}

		/**
		 * Проверить, что есть хотя бы один правильный ответ
		 */
		@$mol_mem
		has_correct_answer() {
			return this.correct_options().length > 0
		}
	}
}
