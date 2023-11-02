import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Sale} from "../../model/sale";
import {SalesService} from "../../services/sales.service";

@Component({
  selector: 'app-sale-details-content',
  templateUrl: './sale-details-content.component.html',
  styleUrls: ['./sale-details-content.component.css']
})
export class SaleDetailsContentComponent {
  sale: Sale = new Sale();

  constructor(private route: ActivatedRoute, private router: Router, private salesService: SalesService) {}
  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.route.params.subscribe(params => {
      const saleId = +params['id'];
      this.salesService.getById(saleId).subscribe((saleResponse: any) => {
        this.sale=saleResponse;
      });
    });
  }

  redirectToNewSale(id: number) {
    this.router.navigate(['/sales', id, 'new']);
  }
}
