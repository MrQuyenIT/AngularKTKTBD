import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductMainCategory } from 'src/app/core/model/product/product-main-category';
import { ProductMainCategoryService } from 'src/app/core/service/product-main-category.service';

@Component({
  selector: 'app-product-main-category-action',
  templateUrl: './product-main-category-action.component.html',
  styleUrls: ['./product-main-category-action.component.css']
})
export class ProductMainCategoryActionComponent implements OnInit {
  entity : ProductMainCategory;
  action:string;
  constructor(
      private route: ActivatedRoute,
     private productMainCategoryService:ProductMainCategoryService,
     private router:Router
     ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params.id!=null){
        //Chỉnh sửa
        this.action ="update";
        this.productMainCategoryService.findById(params.id).subscribe(res=>{
          this.entity = res;
          console.log(this.entity);
        })
      }
      else{
        this.action ="add";
        //Thêm mới
        this.entity = new ProductMainCategory();
      }
   });
  }

  fnSave(){
      if(this.action =="add"){
        this.productMainCategoryService.add(this.entity).subscribe(res=>{
          let result = res as any;
          if(result.Success){
            this.router.navigate(['/pages/product-main-category']);
          }
          else{
            alert("Thêm thất bại");
          }
        })
        //Thêm mới
      }
      else{
        //Chỉnh sửa
        this.productMainCategoryService.update(this.entity).subscribe(res=>{
          let result = res as any;
          if(result.Success){
            alert("Sửa thành công");
            this.router.navigate(['/pages/product-main-category']);
          }
          else{
            alert("Sửa thất bại");
          }
        })
      }
  }

}
