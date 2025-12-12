namespace $ {
	/**
	 * Owner/Profile - владелец квизов
	 * Хранит список созданных квизов
	 */
	export class $bog_quiz_owner extends $hyoo_crus_entity.with({
		Quizzes: $hyoo_crus_list_ref_to(() => $bog_quiz_quiz),
	}) {
		
		/**
		 * Создать новый квиз
		 * Проверяет лимит в 10 квизов на владельца
		 */
		@ $mol_action
		quiz_make() {
			const quizzes = this.Quizzes(null)!
			const count = quizzes.remote_list().length
			
			if (count >= 10) {
				throw new Error('Maximum 10 quizzes per owner')
			}
			
			const quiz = quizzes.remote_make({ '': $hyoo_crus_rank_read })!
			quiz.Owner(null)!.val(this.land().auth().lord())
			return quiz
		}
		
		/**
		 * Общее количество вопросов во всех квизах
		 * Для проверки лимита в 1000 вопросов
		 */
		@ $mol_mem
		total_questions() {
			const quizzes = this.Quizzes()?.remote_list() ?? []
			return quizzes.reduce((sum, quiz) => {
				return sum + (quiz.Questions()?.remote_list().length ?? 0)
			}, 0)
		}
		
	}
}
