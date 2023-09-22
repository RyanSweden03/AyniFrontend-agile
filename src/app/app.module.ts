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
@NgModule({
  declarations: [
    AppComponent,
    ListContentComponent,
    List2ContentComponent,
    ButtonContentComponent,
    Button2ContentComponent,
    FinanceMainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
