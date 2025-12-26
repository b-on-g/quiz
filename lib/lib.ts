namespace $ {
	export class $bog_quiz_lib extends $mol_object2 {

		@$mol_mem
		static axios() {
			$mol_import.script('bog/quiz/lib/axios.bundle.js')
			return (globalThis as any).axios as import('axios').AxiosStatic
		}

		@$mol_mem
		static lodash() {
			$mol_import.script('bog/quiz/lib/lodash.bundle.js')
			return (globalThis as any)._ as _.LoDashStatic
		}

		@$mol_mem
		static moment() {
			$mol_import.script('bog/quiz/lib/moment.bundle.js')
			return (globalThis as any).moment as typeof import('moment')
		}

		static get libraries() {
			return {
				axios: 'axios',
				lodash: 'lodash',
				moment: 'moment',
			} as const
		}
	}
}
