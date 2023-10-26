import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatStepperModule} from "@angular/material/stepper";
import {CropsStepperContentComponent} from "./Management/components/stepper-content/stepper-content.component";
import {HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import {OverlayModule} from "@angular/cdk/overlay";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {
  CropsStep1CardContentComponent
} from './Management/components/step1-card-content/step1-card-content.component';
import {
  CropsStep2CardContentComponent
} from './Management/components/step2-card-content/step2-card-content.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {
  CropsStep3CardContentComponent
} from './Management/components/step3-card-content/step3-card-content.component';
import {MatDialogModule} from "@angular/material/dialog";
import {CropsDialogContentComponent} from './Management/components/dialog-content/dialog-content.component';
import {SalesStepperContentComponent} from "./Shopping/components/stepper-content/stepper-content.component";
import {SalesStep1CardContentComponent} from './Shopping/components/step1-card-content/step1-card-content.component';
import {SalesStep2CardContentComponent} from './Shopping/components/step2-card-content/step2-card-content.component';
import {SalesStep3CardContentComponent} from './Shopping/components/step3-card-content/step3-card-content.component';
import {SalesDialogContentComponent} from './Shopping/components/dialog-content/dialog-content.component';
import {OrdersService} from "./Shopping/services/orders.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ListContentComponent} from './Finance/components/list-content/list-content.component';
import {List2ContentComponent} from './Finance/components/list2-content/list2-content.component';
import {MatDividerModule} from '@angular/material/divider';
import {ButtonContentComponent} from './Finance/components/button-content/button-content.component';
import {Button2ContentComponent} from './Finance/components/button2-content/button2-content.component';
import {FinanceMainContentComponent} from './Finance/components/finance-main-content/finance-main-content.component';
import {DialogContentComponent} from './Finance/components/dialog-content/dialog-content.component';
import {TableCostContentComponent} from './Finance/components/table-cost-content/table-cost-content.component';
import {Button3ContentComponent} from './Finance/components/button3-content/button3-content.component';
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from "@angular/material/table";
import {MatMenuModule} from "@angular/material/menu";
import {TableProfitContentComponent} from './Finance/components/table-profit-content/table-profit-content.component';
import {Button4ContentComponent} from './Finance/components/button4-content/button4-content.component';
import {Dialog2ContentComponent} from './Finance/components/dialog2-content/dialog2-content.component';
import {FarmerNavigationComponent} from './shared/components/farmer-navigation/farmer-navigation.component';
import {SignInComponent} from './Authentication/components/sign-in/sign-in.component';
import {SignUpComponent} from './Authentication/components/sign-up/sign-up.component';

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {SelectRolComponent} from './Authentication/components/select-rol/select-rol.component';
import {
  FarmerMainContentComponent
} from './Authentication/components/home/farmer-home/components/farmer-main-content/farmer-main-content.component';
import {
  MerchantMainContentComponent
} from './Authentication/components/home/merchant-home/components/merchant-main-content/merchant-main-content.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {
  ProductDetailsContentComponent
} from "./Management/pages/product-details-content/product-details-content.component";
import {ProductsContentComponent} from "./Management/pages/products-content/products-content.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {ProductCardComponent} from "./Management/components/product-card/product-card.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {StoreModule} from "@ngrx/store";
import { PurchaseCardContentComponent } from './Shopping/components/purchase-card-content/purchase-card-content.component';
import { PurchasesContentComponent } from './Shopping/pages/purchases-content/purchases-content.component';
import { CancelPurchaseDialogContentComponent } from './Shopping/components/cancel-purchase-dialog-content/cancel-purchase-dialog-content.component';
import { PurchaseDetailsContentComponent } from './Shopping/pages/purchase-details-content/purchase-details-content.component';
import { AddProductContentComponent } from './Management/pages/add-product-content/add-product-content.component';
import {RateContentComponent} from "./Shopping/pages/rate-content/rate-content.component";
import { RateCardContentComponent } from './Shopping/components/rate-card-content/rate-card-content.component';
import { SaleCardContentComponent } from './Shopping/components/sale-card-content/sale-card-content.component';
import { SalesContentComponent } from './Shopping/pages/sales-content/sales-content.component';
import { AddSaleContentComponent } from './Shopping/pages/add-sale-content/add-sale-content.component';
import { SaleDetailsContentComponent } from './Shopping/pages/sale-details-content/sale-details-content.component';
import { OrderRequestsComponent } from "./Shopping/pages/order-requests/order-requests.component";
import { MerchantNavigationComponent } from './shared/components/merchant-navigation/merchant-navigation.component';

let StoreDevtoolsModule;

@NgModule({
  declarations: [
    AppComponent,
    FarmerNavigationComponent,
    SignInComponent,
    SignUpComponent,
    SelectRolComponent,
    FarmerMainContentComponent,
    MerchantMainContentComponent,
    CropsStepperContentComponent,
    CropsStep1CardContentComponent,
    CropsStep2CardContentComponent,
    CropsStep3CardContentComponent,
    CropsDialogContentComponent,
    SalesStepperContentComponent,
    SalesStep1CardContentComponent,
    SalesStep2CardContentComponent,
    SalesStep3CardContentComponent,
    SalesDialogContentComponent,
    ListContentComponent,
    List2ContentComponent,
    ButtonContentComponent,
    Button2ContentComponent,
    FinanceMainContentComponent,
    DialogContentComponent,
    TableCostContentComponent,
    Button3ContentComponent,
    TableProfitContentComponent,
    Button4ContentComponent,
    Dialog2ContentComponent,
    ProductDetailsContentComponent,
    ProductsContentComponent,
    ProductCardComponent,
    PurchaseCardContentComponent,
    PurchasesContentComponent,
    CancelPurchaseDialogContentComponent,
    PurchaseDetailsContentComponent,
    AddProductContentComponent,
    RateContentComponent,
    RateCardContentComponent,
    SaleCardContentComponent,
    SalesContentComponent,
    AddSaleContentComponent,
    SaleDetailsContentComponent,
    OrderRequestsComponent,
    MerchantNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    HttpClientModule,
    MatStepperModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    OverlayModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDialogModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    MatDividerModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatMenuModule,
    MatGridListModule,
    MatPaginatorModule,
    MatProgressBarModule,
  ],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
