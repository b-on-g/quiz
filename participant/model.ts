namespace $ {
	/**
	 * Participant - участник сессии
	 */
	export class $bog_quiz_participant extends $giper_baza_entity.with({
		UserId: $giper_baza_atom_text,
		DisplayName: $giper_baza_text,
		JoinedAt: $giper_baza_atom_bint,
		LastSeenAt: $giper_baza_atom_bint,
	}) {
		/**
		 * Получить отображаемое имя
		 * Если не указано - показывать "Игрок <short_user_id>"
		 */
		@$mol_mem
		display_name_text() {
			const name = this.DisplayName(null)?.str()
			if (name && name.trim()) return name

			const userId = this.UserId(null)?.val() ?? ''
			const shortId = userId.substring(0, 8)
			return `Игрок ${shortId}`
		}

		/**
		 * Обновить время последней активности
		 */
		@$mol_action
		update_last_seen() {
			this.LastSeenAt(null)!.val(BigInt(Date.now()))
		}
	}
}
