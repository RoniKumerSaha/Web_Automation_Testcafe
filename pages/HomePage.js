import { Selector } from 'testcafe'
export default class HomePage extends BagePage{
	constructor() {
		this.feedback = Selector('#feedback')
	}
}