export interface IPageTplOption {
  id: number;
  title: string;
  content: string;
  img: string;
}
export interface IPageTplService {
  getPageTplList: () => any;
  updatePageTpl: (option: IPageTplOption) => any;
  addPageTpl;
  deletePageTpl;
}
export interface IPageTplResult {
  any: any;
}

export interface IUpdatePageOpion {}
