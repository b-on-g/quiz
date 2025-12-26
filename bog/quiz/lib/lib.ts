namespace $ {
	export class $bog_quiz_lib extends $mol_object2 {
		@$mol_mem
		static axios() {
			$mol_import.script('bog/quiz/lib/axios.bundle.js')
			return (globalThis as any).axios
		}

		@$mol_mem
		static lodash() {
			$mol_import.script('bog/quiz/lib/lodash.bundle.js')
			return (globalThis as any).lodash
		}

		@$mol_mem
		static moment() {
			$mol_import.script('bog/quiz/lib/moment.bundle.js')
			return (globalThis as any).moment
		}

		@$mol_mem
		static react() {
			$mol_import.script('bog/quiz/lib/react.bundle.js')
			return (globalThis as any).react
		}

		static get libraries() {
			return {
				axios: 'axios',
				lodash: 'lodash',
				moment: 'moment',
				react: 'react',
			} as const
		}
	}
}
