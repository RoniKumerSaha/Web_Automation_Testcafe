import { Selector, t } from 'testcafe'

export default class Navbar{

    constructor() {
        this.signin_btn = Selector('#signin_button')
        this.search_option = Selector('#searchTerm')
    }

    async search(keyword) {
        await t
		.typeText(this.search_option, keyword)
		.pressKey('enter')
    }

}