import { ProductCategory } from './product-category';

export class Product{
  Id: number;
  Name: string;
  Description: string;
  Avatar: string;
  ImagesList: string;
  Content: string;
  Price: number;
  OldPrice: number;
  Specifications: string;
  Accessories: string;
  WarrantiPolicy: string;
  Quantity: number;
  Promotions: string;
  Icons: string;
  Position: number | null;
  Status: boolean | null;
  ProductCategoryId: number | null;
  ProductCategories: ProductCategory;
  CreateBy: number | null;
  CreateTime: string | null;
  UpdateBy: number | null;
  UpdateTime: string | null;
}
