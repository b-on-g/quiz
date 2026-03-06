namespace $ {
	/**
	 * ReactionEvent - событие реакции-эмодзи в лобби
	 */
	export class $bog_quiz_reaction extends $giper_baza_entity.with({
		Participant: $giper_baza_atom_link_to(() => $bog_quiz_participant),
		Emoji: $giper_baza_atom_text,
		CreatedAt: $giper_baza_atom_bint,
	}) {
		/**
		 * Список доступных эмодзи (10 штук)
		 */
		static available_emojis() {
			return ['👍', '❤️', '😂', '🎉', '🔥', '👏', '😮', '🤔', '😎', '🚀']
		}
	}
}
