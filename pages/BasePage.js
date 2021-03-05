import { t } from "testcafe"
import Base_URL from '../helper/DataHelper'
export default class BasePage{
    constructor() {
        this.page_URL = Base_URL.Base_URL()
    }
    async gotoHome() {
        await t.navigateTo(this.page_URL.Base_URL)
    }
}