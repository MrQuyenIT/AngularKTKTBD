import { Component, OnInit } from '@angular/core';
import { ProductMainCategory } from 'src/app/core/model/product/product-main-category';
import { ProductMainCategoryService } from 'src/app/core/service/product-main-category.service';

@Component({
  selector: 'app-product-main-category',
  templateUrl: './product-main-category.component.html',
  styleUrls: ['./product-main-category.component.css']
})
export class ProductMainCategoryComponent implements OnInit {
  listData:Array<ProductMainCategory>;


  constructor(private productMainCategoryService:ProductMainCategoryService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.productMainCategoryService.getAll().subscribe(res=>{
      console.log(res);
      this.listData = res ;
  });
  }

  delete(id){
    console.log(id);
    this.productMainCategoryService.delete(id).subscribe(res=>{
      let result = res as any;
      if(result.Success){
        this.loadData();
      }
    })
  }
}
