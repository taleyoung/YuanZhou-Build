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
import { IMaterialService } from "../../typings/service/material";

/**
 * @controller api 物料接口
 */
@provide()
@controller("/material")
export default class MaterialController {
  @inject() ctx: Context;

  @inject("materialService") service: IMaterialService;

  /**
   * @summary 获取全部物料
   * @description 获取全部的物料列表
   * @router get /material
   * @request body getMaterialList *body
   */
  @get("/")
  async getPageTplList() {
    const res = await this.service.getMaterialList();
    this.ctx.body = res;
    return res;
  }

  /**
   * @summary 添加物料模块
   * @description 添加物料
   * @router post /material
   * @request body addMaterial *body
   */
  @post("/")
  async addPageTpl() {
    try {
      const res = await this.service.addMaterial(this.ctx.request.body);
      console.log("ctr - res :>> ", res);
      this.ctx.body = res;
      return res;
    } catch (error) {
      console.log("ctr - error :>> ", error);
    }
  }

  /**
   * @summary 修改物料信息
   * @description 修改物料
   * @router put /material
   * @request body updateMaterial *body
   */
  @put("/")
  async updatePageTpl() {
    try {
      const res = await this.service.updateMaterial(this.ctx.request.body);
      console.log("ctr - res :>> ", res);
      this.ctx.body = res;
      return res;
    } catch (error) {
      console.log("ctr - error :>> ", error);
    }
  }

  /**
   * @summary 删除物料
   * @description 删除物料
   * @router delete /material
   * @request body deleteMaterial *body
   */
  @del("/")
  async deletePageTpl() {
    try {
      const res = await this.service.deleteMaterial(this.ctx.request.body);
      console.log("ctr - res :>> ", res);
      this.ctx.body = res;
      return res;
    } catch (error) {
      console.log("ctr - error :>> ", error);
    }
  }
}
