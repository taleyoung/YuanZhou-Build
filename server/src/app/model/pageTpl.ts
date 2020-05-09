import { provide, plugin } from "midway";
import { IPageTplModel } from "../../typings/model/pageTpl";

@provide("pageTplModel")
export default class pageTplModel implements IPageTplModel {
  @plugin()
  mysql;

  async getPageList() {
    try {
      console.log("getPageList");
      const res = await this.mysql.query("SELECT * FROM page", []);
      console.log("res", res);
      return res;
    } catch (error) {
      console.log("model - error", error);
    }
  }
}
