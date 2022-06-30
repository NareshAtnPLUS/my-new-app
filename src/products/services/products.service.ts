import { Injectable } from '@nestjs/common';
import IProduct from 'src/data/IProducts.data';
import { ProductsData } from 'src/data/products.data';

@Injectable()
export class ProductsService {
    constructor(private readonly productsData:ProductsData){}
    getProducts(){
        return this.productsData.products
    }
    addBulkProducts(products:IProduct[]){
        return this.productsData.addBulkProducts = products
    }
    addProduct(product:IProduct){
        return this.productsData.addProduct = product
    }
}
