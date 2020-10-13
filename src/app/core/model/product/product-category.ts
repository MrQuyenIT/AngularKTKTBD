import { ProductMainCategory } from './product-main-category';

export class  ProductCategory {
  Id: number;
  Name: string;
  Avatar: string;
  ImageList: string;
  Description: string;
  Icon: string;
  Position: number | null;
  Status: boolean | null;
  ProductMainCategoryId: number | null;
  ProductMainCategory: ProductMainCategory;
  CreateBy: number | null;
  CreateTime: string | null;
  UpdateBy: number | null;
  UpdateTime: string | null;
}
