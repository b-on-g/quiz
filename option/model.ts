namespace $ {
	/**
	 * Option - вариант ответа на вопрос
	 */
	export class $bog_quiz_option extends $giper_baza_entity.with({
		Text: $giper_baza_text,
		IsCorrect: $giper_baza_atom_bool,
		Order: $giper_baza_atom_bint,
	}) {}
}
