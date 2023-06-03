import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDisplay } from '../product-display';

@Component({
  selector: 'app-product-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent {
  @Input() productDisplay!: ProductDisplay;
}
