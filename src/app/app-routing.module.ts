import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './theme/layout/layout.component';
import { DashboardComponent } from './views/pages/dashboard/dashboard.component';
import { ProductCategoryComponent } from './views/pages/product/product-category/product-category.component';
import { ProductListComponent } from './views/pages/product/product-list/product-list.component';
import { ProductMainCategoryActionComponent } from './views/pages/product/product-main-category/product-main-category-action/product-main-category-action.component';
import { ProductMainCategoryComponent } from './views/pages/product/product-main-category/product-main-category.component';


const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'pages',
        children:[
          {
            path:'product-main-category',
            component:ProductMainCategoryComponent
          },
          {
            path:'product-main-category/action',
            component:ProductMainCategoryActionComponent
          },
          {
            path:'product-main-category/action/:id',
            component:ProductMainCategoryActionComponent
          },
          {
            path:'product-category',
            component:ProductCategoryComponent
          },
          {
            path:'product-list',
            component:ProductListComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
