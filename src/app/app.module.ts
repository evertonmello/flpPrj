import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {AccordionModule} from 'primeng/accordion';     
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {MenuModule} from 'primeng/menu';
import {TableModule} from 'primeng/table';
import { MenuItem } from 'primeng/api'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    AccordionModule, 
    FormsModule,
    ButtonModule,
    MenuModule,
    CheckboxModule,
    InputTextModule,
    InputMaskModule,
    TableModule,
    DropdownModule,
    BrowserAnimationsModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
