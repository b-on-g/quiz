namespace $.$$ {
	// Синхронизация через Гипер Базу отключена: список мастеров пустой.
	// Чистки одного masters_default мало — masters() склеивает его с пирами
	// из бандленного сида, где зашит публичный мастер. Глушим сам masters().
	$giper_baza_yard.masters_default.length = 0
	$giper_baza_yard.masters = (): string[] => []


	new $mol_after_frame(() => {
		$giper_baza_yard.masters_default.push('https://crus.hd4.ru/')
	})

	export class $bog_quiz extends $.$bog_quiz {

		profile() {
			return this.$.$giper_baza_glob.home($bog_quiz_owner as any) as $bog_quiz_owner
		}

		@$mol_mem
		quiz_id(next?: string) {
			const id = this.$.$mol_state_arg.value('quiz', next)
			return id || null
		}

		@$mol_mem
		session_id() {
			return this.$.$mol_state_arg.value('session') || null
		}

		@$mol_mem
		play_id() {
			return this.$.$mol_state_arg.value('play') || null
		}

		@$mol_mem
		is_join() {
			return this.$.$mol_state_arg.value('join') !== null
		}

		@$mol_mem
		current_page(): 'join' | 'play' | 'catalog' {
			if (this.session_id() && this.is_join()) return 'join'
			if (this.play_id()) return 'play'
			return 'catalog'
		}

		override sub() {
			const page = this.current_page()
			if (page === 'join') return [this.Join_page()]
			if (page === 'play') return [this.Play_page()]
			return [super.sub()].flat()
		}

		@$mol_mem
		Join_page() {
			const join = new this.$.$bog_quiz_session_join()
			join.session_id = () => this.session_id()!
			return join
		}

		@$mol_mem
		Play_page() {
			const play = new this.$.$bog_quiz_session_play()
			play.session_id = () => this.play_id()!
			return play
		}

		@$mol_mem
		spread_ids() {
			const owner = this.profile()
			if (!owner) return []
			return (
				owner
					.Quizzes()
					?.remote_list()
					.map((quiz: $bog_quiz_quiz) => quiz.link().toString()) ?? []
			)
		}

		@$mol_mem_key
		spread_key(id: string) {
			return id
		}

		@$mol_action
		quiz_add(event?: Event) {
			const owner = this.profile()!
			const quiz = owner.quiz_make()
			this.quiz_id(quiz.link().toString())
			return event
		}

		@$mol_mem_key
		Quiz_spread(id: string) {
			if (id.startsWith('host:')) {
				const session_id = id.substring(5)
				const host = new this.$.$bog_quiz_session_host()
				host.session_id = () => session_id
				return host
			}

			const editor = new this.$.$bog_quiz_editor()
			editor.quiz_id = () => id
			editor.realm = () => this.Realm()
			return editor
		}
	}
}
