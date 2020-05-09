import { Context, controller, inject, get, provide } from "midway";
import { IPageTplService } from "../../typings/service/pageTpl";

@provide()
@controller("/page")
export class PageTplController {
  @inject()
  ctx: Context;

  @inject("pageTplService")
  service: IPageTplService;

  @get("/list")
  async index() {
    const res = await this.service.getPageTplList();
    console.log("res SERVICE :>> ", res);
    this.ctx.body = res;
    return res;
  }
}
