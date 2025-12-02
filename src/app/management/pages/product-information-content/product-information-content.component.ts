import { Component, OnInit } from '@angular/core';
import { Product } from "../../model/product";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "../../services/products.service";
import { CropdataService } from "../../services/cropdata.service";

// Definimos una interfaz para las fases (solo para este componente visual)
interface Phase {
  name: string;
  durationDays: number;
  description: string;
  calculatedDate?: Date; // Aquí guardaremos la fecha proyectada
}

@Component({
  selector: 'app-product-information-content',
  templateUrl: './product-information-content.component.html',
  styleUrls: ['./product-information-content.component.css']
})
export class ProductInformationContentComponent implements OnInit {

  product: Product = new Product();
  startDate: Date = new Date(); // Fecha de inicio (Por defecto hoy)
  
  // Simulamos las fases (Idealmente esto vendría de tu backend o servicio)
  phases: Phase[] = [
    { name: 'Preparación del Suelo', durationDays: 2, description: 'Limpieza, arado y nivelación.' },
    { name: 'Siembra', durationDays: 1, description: 'Colocación de semillas a profundidad recomendada.' },
    { name: 'Riego y Germinación', durationDays: 15, description: 'Mantener humedad constante.' },
    { name: 'Cuidado y Crecimiento', durationDays: 45, description: 'Monitoreo de plagas y fertilización.' },
    { name: 'Cosecha Estimada', durationDays: 1, description: 'Recolección del producto final.' }
  ];

  cropsUrl = "/crops"; // Corregido: routerLink espera un string o array

  // Formulario para guardar datos (como tenías antes)
  form: any = {
    pickUpWeed: false,
    fertilizeCrop: false,
    oxygenateCrop: false,
    makeCropLine: false,
    makeCropHole: false,
    name: '',
    productId: 0
  };

  constructor(
    private route: ActivatedRoute, 
    private productsService: ProductsService, 
    private dataService: CropdataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.calculateDates(); // Calculamos las fechas iniciales
  }

  loadData() {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      this.productsService.getById(productId).subscribe((productResponse: any) => {
        this.product = productResponse;
        this.form.productId = productId;
        this.form.name = `Cultivo de ${this.product.name}`; // Autocompletar nombre
      });
    });
  }

  // Esta función recalcula el calendario cuando cambias la fecha
  onDateChange(event: any) {
    this.startDate = event.value;
    this.calculateDates();
  }

  calculateDates() {
    let currentDate = new Date(this.startDate);
    
    this.phases.forEach(phase => {
      // Guardamos la fecha actual para esta fase
      phase.calculatedDate = new Date(currentDate);
      
      // Sumamos los días de esta fase para la siguiente
      currentDate.setDate(currentDate.getDate() + phase.durationDays);
    });
  }

  saveData() {
    this.dataService.setFormData(this.form);
    this.router.navigate([this.cropsUrl]);
  }
}