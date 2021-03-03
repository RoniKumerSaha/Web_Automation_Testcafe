import { Selector, t } from 'testcafe'
import BasePage from './BasePage'

class Login extends BasePage {
	constructor() {
		super();
		this.user_name = Selector('#user_login')
		this.password = Selector('#user_password')
		this.error_msg = Selector('div').withText(
			'Login and/or password are wrong.'
		)
	}
	async login(user, pass) {
		await t
			.typeText(this.user_name, user, { paste: true })
			.typeText(this.password, pass)
			.pressKey('enter')
	}
}

export default Login
