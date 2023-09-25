import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListContentComponent } from './Finance/components/list-content/list-content.component';
import { List2ContentComponent } from './Finance/components/list2-content/list2-content.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ButtonContentComponent } from './Finance/components/button-content/button-content.component';
import { Button2ContentComponent } from './Finance/components/button2-content/button2-content.component';
import { FinanceMainContentComponent } from './Finance/components/finance-main-content/finance-main-content.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogContentComponent } from './Finance/components/dialog-content/dialog-content.component';
import { TableCostContentComponent } from './Finance/components/table-cost-content/table-cost-content.component';
import { Button3ContentComponent } from './Finance/components/button3-content/button3-content.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from "@angular/material/select";
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from '@angular/material/card';
import { TableBillContentComponent } from './Finance/components/table-bill-content/table-bill-content.component';
import { Button4ContentComponent } from './Finance/components/button4-content/button4-content.component';
import { Dialog2ContentComponent } from './Finance/components/dialog2-content/dialog2-content.component';



@NgModule({
  declarations: [
    AppComponent,
    ListContentComponent,
    List2ContentComponent,
    ButtonContentComponent,
    Button2ContentComponent,
    FinanceMainContentComponent,
    DialogContentComponent,
    TableCostContentComponent,
    Button3ContentComponent,
    TableBillContentComponent,
    Button4ContentComponent,
    Dialog2ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatMenuModule,
    MatCardModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
