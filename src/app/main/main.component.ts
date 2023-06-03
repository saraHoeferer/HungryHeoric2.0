import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDisplayComponent } from '../product-display/product-display.component';
import { ProductDisplay } from '../product-display';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ProductDisplayComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  productDisplayList: ProductDisplay[] = [
    {
    id: 1,
    name: "Test Produkt",
    icon: "fa-solid fa-carrot fa-4x",
    expiryDate: '12.12.1999',
    purchaseDate: '10.12.1999',
    progress: 75,
    color: "success"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-solid fa-bacon fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 10,
      color: "danger"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-solid fa-bacon fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 40,
      color: "warning"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-regular fa-lemon fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 10,
      color: "danger"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-solid fa-wine-bottle fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 75,
      color: "success"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-solid fa-shrimp fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 75,
      color: "success"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-solid fa-bacon fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 40,
      color: "warning"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-regular fa-lemon fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 40,
      color: "warning"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-solid fa-carrot fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 10,
      color: "danger"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-solid fa-shrimp fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 40,
      color: "warning"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-regular fa-lemon fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 75,
      color: "success"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-solid fa-bacon fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 10,
      color: "danger"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-solid fa-wine-bottle fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 40,
      color: "warning"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-solid fa-shrimp fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 40,
      color: "warning"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-solid fa-carrot fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 75,
      color: "success"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-solid fa-bacon fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 40,
      color: "warning"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-solid fa-shrimp fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 75,
      color: "success"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-regular fa-lemon fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 10,
      color: "danger"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-regular fa-lemon fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 40,
      color: "warning"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-solid fa-carrot fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 40,
      color: "warning"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-solid fa-carrot fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 75,
      color: "success"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-regular fa-lemon fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 10,
      color: "danger"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-solid fa-shrimp fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 75,
      color: "success"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-solid fa-carrot fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 75,
      color: "success"
    },
    {
      id: 1,
      name: "Test Produkt",
      icon: "fa-solid fa-shrimp fa-4x",
      expiryDate: '12.12.1999',
      purchaseDate: '10.12.1999',
      progress: 10,
      color: "danger"
    },

  ];
}
