export interface IPageTplOption {
  id: number;
  title: string;
  content: string;
  img: string;
}
export interface IPageTplService {
  getPageTplList: () => any;
  updatePageTpl: (option: IPageTplOption) => Promise<any>;
  addPageTpl: (option) => Promise<any>;
  deletePageTpl: (option) => Promise<any>;
}

export interface IUpdatePageOpion {}
