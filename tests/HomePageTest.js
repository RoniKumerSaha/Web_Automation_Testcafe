import * as helper from '../helper/ImportHelper'

const nav = new helper.Navbar()
const login_page = new helper.Login()
const forgot_pass = new helper.ForgotPass()
const home = new helper.HomePage()
const feedback = new helper.Feedback()
const page_URL = new helper.Base_URL.Base_URL()

// prettieer-ignore
fixture`Zero Web Security Testcases`
	.page`${page_URL.Base_URL}`.beforeEach(async t => {
	await t.setPageLoadTimeout(2000).setTestSpeed(1)
})

test('User can not login using invalid credentials', async t => {
	await t.click(nav.signin_btn)
	await login_page.login('username1', 'password1')
	await t.expect(login_page.error_msg.exists).ok()
})

test('User can apply for forget password request', async t => {
	const email_provided = 'testing@testing.com'
	await t.click(nav.signin_btn)
	await forgot_pass.apply_forgot_pass_request(email_provided)
	await t.expect(forgot_pass.sent_pass_msg.innerText).contains(email_provided)
})

test('User can send feedback', async t => {
	await t.click(home.feedback)
	await feedback.fill_up_form(
		'Tester',
		'Subject',
		'email@email.com',
		'No comment'
	)
	await t
		.expect(feedback.sent_msg.innerText)
		.contains('Thank you for your comments')
})

test('User can use search feature', async t => {
	nav.search('Banking')
	await t.expect(home.search_result.count).eql(2)
})
