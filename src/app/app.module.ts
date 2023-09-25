import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from "@angular/material/stepper";
import {CropsStepperContentComponent} from "./Management/crops/components/stepper-content/stepper-content.component";
import {HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {OverlayModule} from "@angular/cdk/overlay";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {CropsCardStep1ContentComponent} from './Management/crops/components/card-step1-content/card-step1-content.component';
import {CropsCardStep2ContentComponent} from './Management/crops/components/card-step2-content/card-step2-content.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {MatNativeDateModule} from "@angular/material/core";
import {CropsCardStep3ContentComponent} from './Management/crops/components/card-step3-content/card-step3-content.component';
import {MatDialogModule} from "@angular/material/dialog";
import {CropsDialogContentComponent} from './Management/crops/components/dialog-content/dialog-content.component';
import {SalesStepperContentComponent} from "./Shopping/sales/components/stepper-content/stepper-content.component";
import {SalesCardStep1ContentComponent} from './Shopping/sales/components/card-step1-content/card-step1-content.component';
import {SalesCardStep2ContentComponent} from './Shopping/sales/components/card-step2-content/card-step2-content.component';
import {SalesCardStep3ContentComponent} from './Shopping/sales/components/card-step3-content/card-step3-content.component';
import {SalesDialogContentComponent} from './Shopping/sales/components/dialog-content/dialog-content.component';
import {SalesService} from "./Shopping/sales/services/sales.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CropsStepperContentComponent,
    CropsCardStep1ContentComponent,
    CropsCardStep2ContentComponent,
    CropsCardStep3ContentComponent,
    CropsDialogContentComponent,
    SalesStepperContentComponent,
    SalesCardStep1ContentComponent,
    SalesCardStep2ContentComponent,
    SalesCardStep3ContentComponent,
    SalesDialogContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    ReactiveFormsModule
  ],
  providers: [SalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
