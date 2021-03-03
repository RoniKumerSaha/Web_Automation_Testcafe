const yaml = require('js-yaml')
const fs = require('fs')

module.exports = {
	Base_URL: function () {
		try {
			const URL = yaml.safeLoad(fs.readFileSync('data/configData.yaml', 'utf8'))
			return URL
		} catch (e) {
			console.log(e)
		}
	},
}
