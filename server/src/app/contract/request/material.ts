module.exports = {
  getMaterialList: {},
  addMaterial: {
    title: { type: "string", required: true, description: "物料标题" },
    content: { type: "string", required: true, description: "物料介绍" },
    img: { type: "string", required: false, description: "物料预览图片" }
  },
  updateMaterial: {
    id: { type: "integer", required: true, description: "待更改的物料id" },
    title: { type: "string", required: true, description: "物料标题" },
    content: { type: "string", required: true, description: "物料介绍" },
    img: { type: "string", required: false, description: "物料预览图片" }
  },
  deleteMaterial: {
    id: { type: "integer", required: true, description: "待删除的物料id" }
  }
};
