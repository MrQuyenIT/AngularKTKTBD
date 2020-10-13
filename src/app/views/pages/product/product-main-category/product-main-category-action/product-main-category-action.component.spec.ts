/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductMainCategoryActionComponent } from './product-main-category-action.component';

describe('ProductMainCategoryActionComponent', () => {
  let component: ProductMainCategoryActionComponent;
  let fixture: ComponentFixture<ProductMainCategoryActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMainCategoryActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMainCategoryActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
