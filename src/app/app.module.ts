import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './theme/layout/layout.component';
import { HeaderComponent, SidebarComponent, FooterComponent } from './theme/components';
import { ProductCategoryComponent } from './views/pages/product/product-category/product-category.component';
import { ProductMainCategoryComponent } from './views/pages/product/product-main-category/product-main-category.component';
import { ProductListComponent } from './views/pages/product/product-list/product-list.component';
import { ProductMainCategoryService } from './core/service/product-main-category.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductMainCategoryActionComponent } from './views/pages/product/product-main-category/product-main-category-action/product-main-category-action.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LayoutComponent,
    ProductCategoryComponent,
    ProductMainCategoryComponent,
    ProductListComponent,
    ProductMainCategoryActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductMainCategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
