import { provide, plugin } from "midway";

import { IResFormat } from "../../typings/interface";
import {
  IMaterialOption,
  IMaterialService
} from "../../typings/service/material";

@provide("materialService")
export class MaterialService implements IMaterialService {
  @plugin()
  mysql;

  async getMaterialList(): Promise<IResFormat<any>> {
    try {
      const res = await this.mysql.query("SELECT * FROM material", []);
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

  async updateMaterial(option: IMaterialOption): Promise<IResFormat<any>> {
    try {
      const res = await this.mysql.query(
        "UPDATE material SET title=?, content=?, img=? WHERE id=?",
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

  async addMaterial(option): Promise<IResFormat<any>> {
    try {
      const res = await this.mysql.query(
        "INSERT INTO material (title, content, img) VALUES(?,?,?);",
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
  async deleteMaterial(option): Promise<IResFormat<any>> {
    try {
      const res = await this.mysql.query("DELETE FROM material WHERE id = ?", [
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
