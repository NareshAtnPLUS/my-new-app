import { Injectable } from "@nestjs/common";
import IProduct from "./IProducts.data";

@Injectable()
export class ProductsData {
    private data:IProduct[]
    constructor(){
        this.data=[{
            name:"Bike",
            price:5000,
            description:'This is a bike'
        },
        {
            name:"Car",
            price:250000,
            description:'This is a bike'
        },
        {
            name:"Jet",
            price:500000000,
            description:'This is a bike'
        }]
    }
    get products() {
        return this.data
    }
    set addBulkProducts(products:IProduct[]){
        this.data = [...this.data,...products]
    }
    set addProduct(product:IProduct){
        this.data = [...this.data,product]
    }

}