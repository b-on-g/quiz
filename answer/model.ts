namespace $ {
	/**
	 * Answer - ответ участника на вопрос
	 * Ключ: session_id + question_id + user_id (для overwrite)
	 */
	export class $bog_quiz_answer extends $hyoo_crus_entity.with({
		Session: $hyoo_crus_atom_ref_to(() => $bog_quiz_session),
		Question: $hyoo_crus_atom_ref_to(() => $bog_quiz_question),
		Participant: $hyoo_crus_atom_ref_to(() => $bog_quiz_participant),
		SelectedOptions: $hyoo_crus_list_ref_to(() => $bog_quiz_option),
		UpdatedAt: $hyoo_crus_atom_int,
		FinalAt: $hyoo_crus_atom_int,
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
				selected_list.cut(opt.ref())
			})

			// Добавить новые выбранные опции
			options.forEach(opt => {
				selected_list.add(opt.ref())
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

			const is_selected = current.some(opt => opt.ref().description === option.ref().description)

			if (is_single) {
				// Single choice: очистить всё и добавить только эту опцию
				current.forEach(opt => {
					selected_list.cut(opt.ref())
				})
				if (!is_selected) {
					selected_list.add(option.ref())
				}
			} else {
				// Multi choice: toggle текущую опцию
				if (is_selected) {
					selected_list.cut(option.ref())
				} else {
					selected_list.add(option.ref())
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
			return this.SelectedOptions()?.remote_list() ?? []
		}

		/**
		 * Проверить, выбран ли конкретный вариант
		 */
		@$mol_mem_key
		is_option_selected(option: $bog_quiz_option) {
			return this.selected_option_list().some(opt => opt.ref().description === option.ref().description)
		}
	}
}
