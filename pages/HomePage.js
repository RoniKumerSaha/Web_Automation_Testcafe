import { Selector } from 'testcafe'
import BasePage from "./BasePage"

export default class HomePage extends BasePage{
	constructor() {
		super();
		this.feedback = Selector('#feedback')
		this.search_result = Selector('li').child('a')
	}
}