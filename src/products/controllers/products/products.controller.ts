import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import WinstonLogger from 'src/logger';
import { ProductsService } from 'src/products/services/products.service';

@Controller('products')
export class ProductsController {
    constructor(
        private readonly productsService:ProductsService
    ){}
    @Get("/")
    getProducts(){
        const products = this.productsService.getProducts()
        WinstonLogger.info(products)

        return {payload:products}
    }
    @Post("/")
    addBulkProducts(@Body() body:any){
        const newProducts = body.products
        const products = this.productsService.addBulkProducts(newProducts)
        return {payload:products}
    }
    addProduct(@Body() body:any){
        const newProduct = body.product
        const product = this.productsService.addProduct(newProduct)
        return {payload:product}
    }

}
