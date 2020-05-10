import { inject, provide, plugin } from "midway";

import { IPageTplModel } from "../../typings/model/pageTpl";
import {
  IPageTplOption,
  // IPageTplResult
  IPageTplService
} from "../../typings/service/pageTpl";

@provide("pageTplService")
export class PageTplService implements IPageTplService {
  @inject() pageTplModel: IPageTplModel;

  @plugin()
  mysql;

  async getPageTplList(): Promise<any> {
    try {
      const res = await this.mysql.query("SELECT * FROM page", []);
      return res;
    } catch (error) {
      console.log("service - error", error);
    }
  }

  async updatePageTpl(option: IPageTplOption) {
    try {
      console.log("option :>> ", option);
      // const res = await this.pageTplModel.updatePageTpl(option);
      const res = await this.mysql.query(
        "UPDATE page SET title=?, content=?, img=? WHERE id=?",
        [option.title, option.content, option.img, option.id]
      );
      console.log("service - res", res);
      if (res.affectedRows === 1) {
        return 1;
      }
      return res;
    } catch (error) {
      console.log("error", error);
    }
  }

  async addPageTpl(option) {
    try {
      const res = await this.mysql.query(
        "INSERT INTO page (title, content, img) VALUES(?,?,?);",
        [option.title, option.content, option.img]
      );
      console.log("service - res", res);
      if (res.affectedRows === 1) {
        return 1;
      }
      return res;
    } catch (error) {
      console.log("error", error);
    }
  }
  async deletePageTpl(option) {
    try {
      const res = await this.mysql.query("DELETE FROM page WHERE id = ?", [
        option.id
      ]);
      console.log("service - res", res);
      if (res.affectedRows === 1) {
        return 1;
      }
      return res;
    } catch (error) {
      console.log("error", error);
    }
  }
}
