import {Component, Input} from '@angular/core';
import {ProductType} from "../../types/product.type";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: ProductType = {id: 0, image: '', title : '', description : '', price: 0};
}
