namespace $ {
	export class $bog_quiz_quiz extends $giper_baza_entity.with({
		Title: $giper_baza_text,
		Owner: $giper_baza_atom_link_to(() => $bog_quiz_owner),
		Questions: $giper_baza_list_link_to(() => $bog_quiz_question),
		DefaultQuestionTimer: $giper_baza_atom_bint,
		DefaultReviewTimer: $giper_baza_atom_bint,
		DefaultBasePoints: $giper_baza_atom_bint,
		DefaultWrongPenaltySingle: $giper_baza_atom_bint,
		DefaultWrongPenaltyMultiPerOption: $giper_baza_atom_bint,
		DefaultSpeedEnabled: $giper_baza_atom_bool,
	}) {

		@$mol_action
		question_make() {
			const owner = this.Owner(null)?.remote()
			if (owner && owner.total_questions() >= 1000) {
				throw new Error('Maximum 1000 questions per owner')
			}

			const questions = this.Questions(null)!
			const question = questions.make([[null, $giper_baza_rank_read]])!

			const order = questions.remote_list().length - 1
			question.Order(null)!.val(BigInt(order))

			return question
		}

		@$mol_mem
		questions_ordered() {
			const questions = this.Questions(null)?.remote_list() ?? []
			return [...questions].sort((a: $bog_quiz_question, b: $bog_quiz_question) => {
				return Number(a.Order(null)?.val() ?? 0) - Number(b.Order(null)?.val() ?? 0)
			})
		}
	}
}
