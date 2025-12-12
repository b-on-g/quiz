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
		 * Пока упрощённая версия - просто сохраняем ссылки
		 */
		@ $mol_action
		update_selection(options: $bog_quiz_option[]) {
			// TODO: Реализовать правильное обновление списка
			// Пока просто обновляем timestamp
			this.UpdatedAt(null)!.val(BigInt(Date.now()))
		}
		
		/**
		 * Получить список выбранных вариантов
		 */
		@ $mol_mem
		selected_option_list() {
			return this.SelectedOptions()?.remote_list() ?? []
		}
		
		/**
		 * Проверить, выбран ли конкретный вариант
		 */
		@ $mol_mem_key
		is_option_selected(option: $bog_quiz_option) {
			return this.selected_option_list().some(opt => 
				opt.ref().description === option.ref().description
			)
		}
		
	}
}
