import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Product } from "../../model/product";
import { ProductsService } from "../../services/products.service";
import { TokenStorageService } from "../../../authentication/services/token-storage.service";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-new-product-form-content',
  templateUrl: './new-product-form-content.component.html',
  styleUrls: ['./new-product-form-content.component.css']
})
export class NewProductFormContentComponent {
  
  productForm: Product;

  // Lista predefinida de imágenes para no estar pegando URLs
  availableImages = [
    { name: 'Papa / Patata', url: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { name: 'Maíz / Choclo', url: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { name: 'Arroz', url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { name: 'Trigo', url: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  ];

  constructor(
    private productsService: ProductsService, 
    private router: Router, 
    private tokenStorage: TokenStorageService,
    public dialogRef: MatDialogRef<NewProductFormContentComponent> 
  ) {
    this.productForm = {
      id: 0,
      name: '',
      description: '',
      recommendedCultivationDistance: '', // Ojo: Si tu backend espera string, lo dejamos así, pero en HTML forzamos números
      recommendedCultivationDepth: '',
      recommendedGrowingClimate: '',
      recommendedSoilType: '',
      recommendedGrowingSeason: '',
      unitPrice: 0,
      imageUrl: '', // Aquí se guardará la URL seleccionada
      userId: this.tokenStorage.getUser().id,
    };
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    // Validamos que el precio sea mayor a 0 y tenga nombre
    if (this.productForm.name && this.productForm.unitPrice > 0) {
      this.productsService.create(this.productForm).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }
}