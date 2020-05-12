module.exports = {
  getPageTplList: {
    id: { type: "integer", required: true, description: "页面模板id" }
  },
  addPageTpl: {
    title: { type: "string", required: true, description: "页面模板标题" },
    content: { type: "string", required: true, description: "页面模板介绍" },
    img: { type: "string", required: false, description: "页面模板预览图片" }
  },
  updatePageTpl: {
    id: { type: "integer", required: true, description: "待更改的页面模板id" },
    title: { type: "string", required: true, description: "页面模板标题" },
    content: { type: "string", required: true, description: "页面模板介绍" },
    img: { type: "string", required: false, description: "页面模板预览图片" }
  },
  deletePageTpl: {
    id: { type: "integer", required: true, description: "待删除的页面模板id" }
  }
};
