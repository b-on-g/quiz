namespace $ {
	/**
	 * Scoring engine для расчета очков
	 */
	export class $bog_quiz_scoring extends $mol_object {
		/**
		 * Рассчитать speed multiplier
		 * @param question_started_at - время начала вопроса (timestamp)
		 * @param answer_final_at - время финального ответа (timestamp)
		 * @param question_timer_sec - длительность вопроса в секундах
		 * @param speed_k_max - максимальный множитель (обычно 2)
		 * @param speed_k_min - минимальный множитель (обычно 1)
		 * @param speed_skip_sec - время пропуска в начале (анти-тык, обычно 1)
		 */
		static speed_multiplier(
			question_started_at: bigint,
			answer_final_at: bigint,
			question_timer_sec: bigint,
			speed_k_max: number,
			speed_k_min: number,
			speed_skip_sec: bigint,
		): number {
			const elapsed_ms = Number(answer_final_at - question_started_at)
			const elapsed_sec = elapsed_ms / 1000
			const total_sec = Number(question_timer_sec)
			const skip_sec = Number(speed_skip_sec)

			// Если ответ раньше skip_sec - множитель = 1 (анти-тык)
			if (elapsed_sec < skip_sec) {
				return speed_k_min
			}

			// Эффективное время = elapsed - skip
			const effective_sec = elapsed_sec - skip_sec
			const effective_total = total_sec - skip_sec

			// Линейная интерполяция от k_max к k_min
			// m = k_min + (k_max - k_min) * (1 - effective / effective_total)
			const ratio = Math.min(1, effective_sec / effective_total)
			const multiplier = speed_k_min + (speed_k_max - speed_k_min) * (1 - ratio)

			return multiplier
		}

		/**
		 * Рассчитать очки для single-choice вопроса
		 */
		static score_single(
			is_correct: boolean,
			base_points: bigint,
			wrong_penalty: bigint,
			multiplier: number,
			speed_enabled: boolean,
		): number {
			if (is_correct) {
				const m = speed_enabled ? multiplier : 1
				return Number(base_points) * m
			} else {
				return -Number(wrong_penalty)
			}
		}

		/**
		 * Рассчитать очки для multi-choice вопроса
		 * @param selected_refs - массив ID выбранных опций
		 * @param correct_refs - массив ID правильных опций
		 * @param base_points - базовые очки
		 * @param wrong_penalty_per_option - штраф за каждую неправильную опцию
		 * @param multiplier - скоростной множитель
		 * @param speed_enabled - включен ли speed множитель
		 */
		static score_multi(
			selected_refs: string[],
			correct_refs: string[],
			base_points: bigint,
			wrong_penalty_per_option: bigint,
			multiplier: number,
			speed_enabled: boolean,
		): number {
			// Пересечение (правильно выбранные)
			const hits = selected_refs.filter(s => correct_refs.includes(s))
			const hit_count = hits.length

			// Неправильно выбранные
			const misses = selected_refs.filter(s => !correct_refs.includes(s))
			const miss_count = misses.length

			// Очки за правильные
			const correct_count = correct_refs.length
			const per_correct = correct_count > 0 ? Number(base_points) / correct_count : 0
			const m = speed_enabled ? multiplier : 1
			const points_positive = hit_count * per_correct * m

			// Штрафы за неправильные (без множителя)
			const points_negative = miss_count * Number(wrong_penalty_per_option)

			// Итого (может быть отрицательным)
			return points_positive - points_negative
		}

		/**
		 * Рассчитать очки для ответа
		 */
		static calculate_answer_score(answer: $bog_quiz_answer, session: $bog_quiz_session): number {
			const question = answer.Question()?.remote()
			if (!question) return 0

			const final_at = answer.FinalAt()?.val()
			if (!final_at) return 0 // Не финализирован

			const question_type = question.Type()?.val() || 'single'
			const base_points = question.BasePoints()?.val() ?? BigInt(100)
			const speed_enabled = question.SpeedEnabled()?.val() ?? true

			// Получить настройки сессии
			const question_started_at = session.QuestionStartedAt()?.val() ?? BigInt(0)
			const question_timer_sec = session.QuestionTimerSec()?.val() ?? BigInt(30)
			const speed_k_max = session.SpeedKMax()?.val() ?? 2.0
			const speed_k_min = session.SpeedKMin()?.val() ?? 1.0
			const speed_skip_sec = session.SpeedSkipSec()?.val() ?? BigInt(1)

			// Рассчитать multiplier
			const multiplier = this.speed_multiplier(
				question_started_at,
				final_at,
				question_timer_sec,
				speed_k_max,
				speed_k_min,
				speed_skip_sec,
			)

			if (question_type === 'single') {
				// Single choice
				const selected = answer.selected_option_list()
				if (selected.length === 0) return 0

				const selected_option = selected[0]
				const is_correct = selected_option.IsCorrect()?.val() ?? false
				const wrong_penalty = question.WrongPenaltySingle()?.val() ?? BigInt(0)

				return this.score_single(is_correct, base_points, wrong_penalty, multiplier, speed_enabled)
			} else {
				// Multi choice
				const selected = answer.selected_option_list()
				const selected_refs = selected.map(opt => opt.link().toString())

				const correct_options = question.correct_options()
				const correct_refs = correct_options.map((opt: $bog_quiz_option) => opt.link().toString())

				const wrong_penalty_per = question.WrongPenaltyMultiPerOption()?.val() ?? BigInt(0)

				return this.score_multi(
					selected_refs,
					correct_refs,
					base_points,
					wrong_penalty_per,
					multiplier,
					speed_enabled,
				)
			}
		}

		/**
		 * Рассчитать общий счет участника в сессии
		 */
		static calculate_participant_total_score(
			participant: $bog_quiz_participant,
			session: $bog_quiz_session,
		): number {
			const answers_list = session.Answers()?.remote_list() ?? []

			// Найти все ответы этого участника
			const participant_answers = answers_list.filter(ans => {
				const ans_participant = ans.Participant()?.remote()
				return ans_participant?.link().toString() === participant.link().toString()
			})

			// Суммировать очки
			let total = 0
			participant_answers.forEach(ans => {
				total += this.calculate_answer_score(ans, session)
			})

			return total
		}
	}
}
