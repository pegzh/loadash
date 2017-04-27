import {config, http} from 'libs/karam'

export default {
	name: 'vendor',
	components: {},
	methods: {
		translate(origin) {
			return pdf_parse(origin)
		},
		make(source) {
			let code = mkdown.make(source)
			http.post('$SERVER/storage').then(callback => {
				if (callback.code == 200) {
					//@TODO handler
				} else {
					//@TODO handler
				}
				return config.SUCCESS
			}, error => {
				//@TODO handler for error callback
			})
		}
	}
}
