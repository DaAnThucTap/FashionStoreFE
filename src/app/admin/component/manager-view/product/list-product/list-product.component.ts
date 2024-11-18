import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../../services/product.service';
import { Products } from '../../../../../entity/product/product';
import { ProductCategory } from '../../../../../entity/category/product-category';
import { CategoryService } from '../../../../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit {
  product!: Products[];
  listProducts!: Products[];
  number = 0;
  totalPages = 0;
  theTotalElements: number = 0;
  size: number = 15;
  currentCategoryId: number = 1;  
  listCate!: ProductCategory[]; 
  nameProduct!: string ;
  nameCategoryFilter="" ;
  price!: string;
  isGenderFilter: string='123';


  constructor(
    private productService: ProductService,
    private cateService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,

  ) {}

  ngOnInit(): void {
    this.filterByCategory();
    this.filterProducts(); 
  }

  filterByCategory() {
    this.cateService.getAllCate().subscribe(
      data => {
        this.listCate = data.result as ProductCategory[]; 
      },
      error => {
        console.error('Error fetching categories', error);
      }
    );
  }
 
  paging(numberPage: number) {
    console.log(numberPage);
    console.log(this.totalPages);
    this.number = numberPage;
    this.filterProducts();  
  }
  
  filterProducts() {
 
  
    this.productService.filterProduct(this.nameProduct, this.nameCategoryFilter, this.price,this.isGenderFilter,   this.number, this.size).subscribe(
      data => {
        this.listProducts = data.result.content;         
        this.theTotalElements = data.result.totalElements;            
        this.totalPages = data.result.totalPages;         
      },
      error => {
        console.log('Error fetching data:', error);
      }
    );
  }
  

}
