namespace $ {
	/**
	 * Participant - участник сессии
	 */
	export class $bog_quiz_participant extends $hyoo_crus_entity.with({
		UserId: $hyoo_crus_atom_str,
		DisplayName: $hyoo_crus_text,
		JoinedAt: $hyoo_crus_atom_int,
		LastSeenAt: $hyoo_crus_atom_int,
	}) {
		
		/**
		 * Получить отображаемое имя
		 * Если не указано - показывать "Игрок <short_user_id>"
		 */
		@ $mol_mem
		display_name_text() {
			const name = this.DisplayName()?.str()
			if (name && name.trim()) return name
			
			const userId = this.UserId()?.val() ?? ''
			const shortId = userId.substring(0, 8)
			return `Игрок ${shortId}`
		}
		
		/**
		 * Обновить время последней активности
		 */
		@ $mol_action
		update_last_seen() {
			this.LastSeenAt(null)!.val(BigInt(Date.now()))
		}
		
	}
}
