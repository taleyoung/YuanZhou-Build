import { plugin, provide } from "midway";

import { IPageTplModel } from "../../typings/model/pageTpl";

@provide("pageTplModel")
export default class pageTplModel implements IPageTplModel {
  @plugin() mysql;

  async getPageList() {
    try {
      const res = await this.mysql.query("SELECT * FROM page", []);
      console.log("res", res);
      return res;
    } catch (error) {
      console.log("model - error", error);
    }
  }

  async updatePageTpl(option) {
    try {
      const res = await this.mysql.query(
        "UPDATE page SET title=? content=? img=? WHERE id=?",
        [option.title, option.content, option.img, option.id]
      );
      console.log("model - res :>> ", res);
    } catch (error) {
      console.log("model - error", error);
    }
  }
}
