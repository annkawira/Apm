import {Component, OnInit} from "@angular/core";
import { IProduct } from "./products";

@Component({
    selector:"",
    templateUrl:"./Product-list.component.html",
    styleUrls:["./product-list.component.css"]
})

export class productListComponent implements OnInit{
    pageTitle: string = "Product List";
    imageWidth: number =50;
    imageMargin: number =2;
    showImage:boolean =false;

    private _listFilter: string ='';
    get listFilter(): string{
        return this._listFilter;
    }
    
    set listFilter(value:string){
        this._listFilter = value;
        console.log('in setter:',value);
    }
    products: IProduct[] =[
        {
            "productId":2,
            "productName":"Garden Cart",
            "productCode":"GDN-0023",
            "releaseDate":"March 18,2021",
            "description":"15 gallon capacity rolling garden cart",
            "price":32.99,
            "starRating":4.2,
            "imageUrl":"assets/images/garden_cart.png"
        },
        {
            "productId":5,
            "productName":"hammer",
            "productCode":"TBX-0048",
            "releaseDate":"May 18,2021",
            "description":"curved claw steel hammer",
            "price":8.9,
            "starRating":4.8,
            "imageUrl":"assets/images/hammer.png"
        }
    ]
    toggleImage():void{
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        console.log('In OnInit');
    }
}