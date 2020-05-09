import { provide, inject } from "midway";
import {
  IPageTplService,
  IPageTplOption
  // IPageTplResult
} from "../../typings/service/pageTpl";
import { IPageTplModel } from "../../typings/model/pageTpl";

@provide("pageTplService")
export class PageTplService implements IPageTplService {
  @inject()
  pageTplModel: IPageTplModel;

  async getPageTplList(options: IPageTplOption): Promise<any> {
    try {
      const res = await this.pageTplModel.getPageList();
      return res;
    } catch (error) {
      console.log("service - error", error);
    }
  }
}
