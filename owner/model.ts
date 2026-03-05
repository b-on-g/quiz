namespace $ {
	export class $bog_quiz_owner extends $giper_baza_entity.with({
		Quizzes: $giper_baza_list_link_to(() => $bog_quiz_quiz),
		Sessions: $giper_baza_list_link_to(() => $bog_quiz_session),
	}) {

		@$mol_action
		quiz_make() {
			const quizzes = this.Quizzes(null)!
			const count = quizzes.remote_list().length

			if (count >= 10) {
				throw new Error('Maximum 10 quizzes per owner')
			}

			const quiz = quizzes.make([[null, $giper_baza_rank_read]])!
			quiz.Owner(null)!.remote(this)
			return quiz
		}

		@$mol_action
		session_make(quiz: $bog_quiz_quiz) {
			const sessions = this.Sessions(null)!

			// Session land: everyone can post (for submitting answers)
			const session = sessions.make([
				[null, $giper_baza_rank_post('slow')],
			])!

			session.Quiz(null)!.remote(quiz)
			session.Host(null)!.remote(this)
			session.State(null)!.val('waiting')
			session.QuestionIndex(null)!.val(BigInt(0))

			session.QuestionTimerSec(null)!.val(quiz.DefaultQuestionTimer(null)?.val() ?? BigInt(30))
			session.ReviewTimerSec(null)!.val(quiz.DefaultReviewTimer(null)?.val() ?? BigInt(10))
			session.ShowStats(null)!.val(quiz.DefaultSpeedEnabled(null)?.val() ?? false)
			session.ReactionsEnabled(null)!.val(false)
			session.LeaderboardEnabled(null)!.val(true)

			session.SpeedKMax(null)!.val(2.0)
			session.SpeedKMin(null)!.val(1.0)
			session.SpeedSkipSec(null)!.val(BigInt(1))

			return session
		}

		@$mol_action
		quiz_delete(quiz: $bog_quiz_quiz) {
			const quizzes = this.Quizzes(null)
			if (!quizzes) return
			quizzes.cut(quiz.link())
		}

		@$mol_mem
		total_questions() {
			const quizzes = this.Quizzes(null)?.remote_list() ?? []
			return quizzes.reduce((sum, quiz) => {
				return sum + (quiz.Questions(null)?.remote_list().length ?? 0)
			}, 0)
		}
	}
}
