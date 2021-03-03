import { Selector } from 'testcafe'
import BasePage from "./BasePage"

export default class HomePage extends BasePage{
	constructor() {
		this.feedback = Selector('#feedback')
	}
}