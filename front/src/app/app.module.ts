import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './components/mainPage/main-page.component';
import { AddItemComponent } from './components/item/add-item/add-item.component';
import { ViewItemComponent } from './components/item/view-item/view-item.component';
import { AddSucursalComponent } from './components/sucursal/add-sucursal/add-sucursal.component';
import { UpdateItemComponent } from './components/item/update-item/update-item.component';
import { UpdateSucursalComponent } from './components/sucursal/update-sucursal/update-sucursal.component';
import { ViewSucursalComponent } from './components/sucursal/view-sucursal/view-sucursal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    AddItemComponent,
    ViewItemComponent,
    AddSucursalComponent,
    UpdateItemComponent,
    UpdateSucursalComponent,
    ViewSucursalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
