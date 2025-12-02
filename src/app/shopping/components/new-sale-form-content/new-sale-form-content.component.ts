import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { SalesService } from "../../services/sales.service";
import { Sale } from "../../model/sale";
import { TokenStorageService } from "../../../authentication/services/token-storage.service";
import { MatDialogRef } from "@angular/material/dialog"; // Importante

@Component({
  selector: 'app-new-sale-form-content',
  templateUrl: './new-sale-form-content.component.html',
  styleUrls: ['./new-sale-form-content.component.css']
})
export class NewSaleFormContentComponent {

  saleForm: Sale;

  // Lista de imágenes para seleccionar rápido
  availableImages = [
    { name: 'Papa / Patata', url: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { name: 'Maíz / Choclo', url: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { name: 'Arroz', url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { name: 'Trigo', url: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  ];

  constructor(
    private salesService: SalesService,
    private router: Router,
    private tokenStorage: TokenStorageService,
    public dialogRef: MatDialogRef<NewSaleFormContentComponent>
  ) {
    this.saleForm = {
      id: 0,
      name: '',
      description: '',
      unitPrice: 0,
      quantity: 0,
      imageUrl: '',
      userId: 0
    };
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.saleForm.userId = this.tokenStorage.getUser().id;

    if (this.saleForm.name && this.saleForm.unitPrice > 0 && this.saleForm.quantity > 0) {
      this.salesService.create(this.saleForm).subscribe(() => {
        this.dialogRef.close(true);
        location.reload();
      });
    }
  }
}