import {
  Context,
  controller,
  get,
  inject,
  post,
  provide,
  put,
  del
} from "midway";
import { IPageTplService } from "../../typings/service/pageTpl";

/**
 * @controller api 会场模板接口
 */
@provide()
@controller("/page")
export default class PageTplController {
  @inject() ctx: Context;

  @inject("pageTplService") service: IPageTplService;

  /**
   * @summary 获取全部会场模板
   * @description 获取全部的会场模板列表
   * @router get /page
   * @request body getPageTplList *body
   */
  @get("/")
  async getPageTplList() {
    const res = await this.service.getPageTplList();
    this.ctx.body = res;
    return res;
  }

  /**
   * @summary 添加会场模板
   * @description 添加会场模板
   * @router post /page
   * @request body addPageTpl *body
   */
  @post("/")
  async addPageTpl() {
    try {
      const res = await this.service.addPageTpl(this.ctx.request.body);
      console.log("ctr - res :>> ", res);
      this.ctx.body = res;
      return res;
    } catch (error) {
      console.log("ctr - error :>> ", error);
    }
  }

  /**
   * @summary 修改会场模板
   * @description 修改会场模板的基本信息
   * @router put /page
   * @request body updatePageTpl *body
   */
  @put("/")
  async updatePageTpl() {
    try {
      const res = await this.service.updatePageTpl(this.ctx.request.body);
      console.log("ctr - res :>> ", res);
      this.ctx.body = res;
      return res;
    } catch (error) {
      console.log("ctr - error :>> ", error);
    }
  }

  /**
   * @summary 删除会场模板
   * @description 删除会场模板
   * @router delete /page
   * @request body deletePageTpl *body
   */
  @del("/")
  async deletePageTpl() {
    try {
      const res = await this.service.deletePageTpl(this.ctx.request.body);
      console.log("ctr - res :>> ", res);
      this.ctx.body = res;
      return res;
    } catch (error) {
      console.log("ctr - error :>> ", error);
    }
  }
}
