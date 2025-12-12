namespace $ {
	/**
	 * ReactionEvent - событие реакции-эмодзи в лобби
	 */
	export class $bog_quiz_reaction extends $hyoo_crus_entity.with({
		Participant: $hyoo_crus_atom_ref_to(() => $bog_quiz_participant),
		Emoji: $hyoo_crus_atom_str,
		CreatedAt: $hyoo_crus_atom_int,
	}) {
		
		/**
		 * Список доступных эмодзи (10 штук)
		 */
		static available_emojis() {
			return ['👍', '❤️', '😂', '🎉', '🔥', '👏', '😮', '🤔', '😎', '🚀']
		}
		
	}
}
