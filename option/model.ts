namespace $ {
	/**
	 * Option - вариант ответа на вопрос
	 */
	export class $bog_quiz_option extends $hyoo_crus_entity.with({
		Text: $hyoo_crus_text,
		IsCorrect: $hyoo_crus_atom_bool,
		Order: $hyoo_crus_atom_int,
	}) {
		
	}
}
