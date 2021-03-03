import { Selector, t } from 'testcafe'
import BasePage from "./BasePage"

class ForgotPass extends BasePage{
	constructor() {
		super();
		this.forgot_password = Selector('a').withText('Forgot your password ?')
		this.email_input = Selector('#user_email')
		this.send_pass = Selector('input').withAttribute('value', 'Send Password')
		this.sent_pass_msg = Selector('.row').child()
	}
	async apply_forgot_pass_request(email) {
		await t
			.click(this.forgot_password)
			.typeText(this.email_input, email)
			.click(this.send_pass)
	}
}

export default ForgotPass