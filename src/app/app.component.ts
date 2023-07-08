import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Data Binding Examples"

  firstName: string = "Jack";
	lastName: string = "Martin";

  isDisabled: boolean = true;

  savedMessage: string = "";

  message: string = "";

  toggle: boolean = false;
  show: string = "";

  product: Product;

  products: Product[];

  array: number[];
	length: number;

  constructor(){
    this.product = new Product("hand wash",200,new Date('2022-03-25'));
    this.products = [ new Product('Soap', 100, new Date('2022-03-21')),
                      new Product('Toothpaste', 200, new Date('2022-05-09')),
                      new Product('Shampoo', 150, new Date('2022-10-21'))];

    this.array = [];
    this.length = 0;

    setTimeout(()=>{
      this.isDisabled = false;
    },2000);
  }

  getName(): string {
    return this.firstName + ' ' + this.lastName; 
  }

  getIsDisabled(): boolean {
    return this.isDisabled;
  }

  onSave(): void{
     this.savedMessage = "Message Saved";
  }

  onToogle(): void{
     this.toggle = !this.toggle;
  }
  
  onShow(): void{
    if (this.show == ""){
      this.show = "something";
    } 
    else {
      this.show = "";
    }
  }

  getLength(): number {
	  this.length = this.array.length;
	  return this.array.length;
  }

  onAddElement(): void{
    this.array.push(1);
  }

}
