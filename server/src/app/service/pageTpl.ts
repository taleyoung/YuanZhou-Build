import { inject, provide, plugin } from "midway";

import { IPageTplModel } from "../../typings/model/pageTpl";
import { IResFormat } from "../../typings/interface";
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

  async getPageTplList(): Promise<IResFormat<any>> {
    try {
      const res = await this.mysql.query("SELECT * FROM page", []);
      return {
        code: 0,
        data: res
      };
    } catch (error) {
      console.log("service - error", error);
      return {
        code: 1,
        err: "调用失败"
      };
    }
  }

  async updatePageTpl(option: IPageTplOption): Promise<IResFormat<any>> {
    try {
      console.log("option :>> ", option);
      const res = await this.mysql.query(
        "UPDATE page SET title=?, content=?, img=? WHERE id=?",
        [option.title, option.content, option.img, option.id]
      );
      console.log("service - res", res);
      if (res.affectedRows === 1) {
        return {
          code: 0,
          data: res
        };
      }
      return res;
    } catch (error) {
      console.log("error", error);
      return {
        code: 1,
        err: "调用失败"
      };
    }
  }

  async addPageTpl(option): Promise<IResFormat<any>> {
    try {
      const res = await this.mysql.query(
        "INSERT INTO page (title, content, img) VALUES(?,?,?);",
        [option.title, option.content, option.img]
      );
      console.log("service - res", res);
      if (res.affectedRows === 1) {
        return {
          code: 0,
          data: res
        };
      }
      return res;
    } catch (error) {
      console.log("error", error);
      return {
        code: 1
      };
    }
  }
  async deletePageTpl(option): Promise<IResFormat<any>> {
    try {
      const res = await this.mysql.query("DELETE FROM page WHERE id = ?", [
        option.id
      ]);
      console.log("service - res", res);
      if (res.affectedRows === 1) {
        return {
          code: 0,
          data: res
        };
      }
      return res;
    } catch (error) {
      console.log("error", error);
      return {
        code: 1
      };
    }
  }
}
