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

@provide()
@controller("/page")
export class PageTplController {
  @inject() ctx: Context;

  @inject("pageTplService") service: IPageTplService;

  @get("/")
  async getPageTplList() {
    const res = await this.service.getPageTplList();
    this.ctx.body = res;
    return res;
  }

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
