export interface IMaterialOption {
  id: number;
  title: string;
  content: string;
  img: string;
}
export interface IMaterialService {
  getMaterialList: () => any;
  updateMaterial: (option: IMaterialOption) => Promise<any>;
  addMaterial: (option) => Promise<any>;
  deleteMaterial: (option) => Promise<any>;
}
