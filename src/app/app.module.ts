import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { CurrencyMaskModule } from "ng2-currency-mask";
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {AccordionModule} from 'primeng/accordion';     
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {MenuModule} from 'primeng/menu';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {ListComponent } from './list/list.component'
import {FormComponent } from './form/form.component';


const appRoutes: Routes = [
  { path: 'listagem', component: ListComponent },
  { path: 'cadastro',      component: FormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    CurrencyMaskModule,
    DialogModule,
    AccordionModule, 
    FormsModule,
    ButtonModule,
    MenuModule,
    CheckboxModule,
    InputTextModule,
    InputMaskModule,
    TableModule,
    DropdownModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
