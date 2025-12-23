namespace $ {
	/**
	 * Owner/Profile - владелец квизов
	 * Хранит список созданных квизов
	 */
	export class $bog_quiz_owner extends $giper_baza_entity.with({
		Quizzes: $giper_baza_list_link_to(() => $bog_quiz_quiz),
		Sessions: $giper_baza_list_link_to(() => $bog_quiz_session),
	}) {
		/**
		 * Создать новый квиз
		 * Проверяет лимит в 10 квизов на владельца
		 */
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

		/**
		 * Создать новую сессию для квиза
		 */
		@$mol_action
		session_make(quiz: $bog_quiz_quiz) {
			const sessions = this.Sessions(null)!
			const session = sessions.make([[null, $giper_baza_rank_read]])!

			// Установить ссылку на квиз
			session.Quiz(null)!.remote(quiz)

			// Установить хоста
			session.Host(null)!.remote(this)

			// Установить начальное состояние
			session.State(null)!.val('waiting')
			session.QuestionIndex(null)!.val(BigInt(0))

			// Установить дефолтные настройки из квиза или стандартные
			session.QuestionTimerSec(null)!.val(quiz.DefaultQuestionTimer()?.val() ?? BigInt(30))
			session.ReviewTimerSec(null)!.val(quiz.DefaultReviewTimer()?.val() ?? BigInt(10))
			session.ShowStats(null)!.val(quiz.DefaultSpeedEnabled()?.val() ?? false)
			session.ReactionsEnabled(null)!.val(false)
			session.LeaderboardEnabled(null)!.val(true)

			// Speed параметры
			session.SpeedKMax(null)!.val(2.0)
			session.SpeedKMin(null)!.val(1.0)
			session.SpeedSkipSec(null)!.val(BigInt(1))

			return session
		}

		/**
		 * Общее количество вопросов во всех квизах
		 * Для проверки лимита в 1000 вопросов
		 */
		@$mol_mem
		total_questions() {
			const quizzes = this.Quizzes()?.remote_list() ?? []
			return quizzes.reduce((sum, quiz) => {
				return sum + (quiz.Questions()?.remote_list().length ?? 0)
			}, 0)
		}
	}
}
