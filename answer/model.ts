namespace $ {
	/**
	 * Answer - ответ участника на вопрос
	 * Ключ: session_id + question_id + user_id (для overwrite)
	 */
	export class $bog_quiz_answer extends $giper_baza_entity.with({
		Session: $giper_baza_atom_link_to(() => $bog_quiz_session),
		Question: $giper_baza_atom_link_to(() => $bog_quiz_question),
		Participant: $giper_baza_atom_link_to(() => $bog_quiz_participant),
		SelectedOptions: $giper_baza_list_link_to(() => $bog_quiz_option),
		UpdatedAt: $giper_baza_atom_bint,
		FinalAt: $giper_baza_atom_bint,
	}) {
		/**
		 * Обновить выбранные варианты ответа
		 */
		@$mol_action
		update_selection(options: $bog_quiz_option[]) {
			const selected_list = this.SelectedOptions(null)!

			// Очистить текущий список
			const current = selected_list.remote_list()
			current.forEach(opt => {
				selected_list.cut(opt.link())
			})

			// Добавить новые выбранные опции
			options.forEach(opt => {
				selected_list.add(opt.link())
			})

			// Обновить timestamp
			this.UpdatedAt(null)!.val(BigInt(Date.now()))
		}

		/**
		 * Переключить выбор опции (для single/multi choice)
		 */
		@$mol_action
		toggle_option(option: $bog_quiz_option, is_single: boolean) {
			const selected_list = this.SelectedOptions(null)!
			const current = selected_list.remote_list()

			const is_selected = current.some(opt => opt.link().toString() === option.link().toString())

			if (is_single) {
				// Single choice: очистить всё и добавить только эту опцию
				current.forEach(opt => {
					selected_list.cut(opt.link())
				})
				if (!is_selected) {
					selected_list.add(option.link())
				}
			} else {
				// Multi choice: toggle текущую опцию
				if (is_selected) {
					selected_list.cut(option.link())
				} else {
					selected_list.add(option.link())
				}
			}

			// Обновить timestamp
			this.UpdatedAt(null)!.val(BigInt(Date.now()))
		}

		/**
		 * Получить список выбранных вариантов
		 */
		@$mol_mem
		selected_option_list() {
			return this.SelectedOptions(null)?.remote_list() ?? []
		}

		/**
		 * Проверить, выбран ли конкретный вариант
		 */
		@$mol_mem_key
		is_option_selected(option: $bog_quiz_option) {
			return this.selected_option_list().some(opt => opt.link().toString() === option.link().toString())
		}
	}
}
