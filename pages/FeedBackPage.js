import { Selector, t } from 'testcafe'
import BasePage from './BasePage'
class Feedback extends BasePage {
	constructor() {
		super();
		this.name = Selector('#name')
		this.email = Selector('#email')
		this.subject = Selector('#subject')
		this.message = Selector('#comment')
		this.submit_form = Selector('input').withAttribute('value', 'Send Message')
		this.sent_msg = Selector('.row').child()
	}
	async fill_up_form(name, sub, email, msg) {
		await t
			.typeText(this.name, name)
			.typeText(this.email, email)
			.typeText(this.subject, sub)
			.typeText(this.message, msg)
			.click(this.submit_form)
	}
}

export default Feedback
