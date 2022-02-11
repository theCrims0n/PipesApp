import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { AppRouterModule } from './app-router/app-router.module';
import { VentasModule } from './ventas/ventas.module';
//asignamos el lenguaje que queremos para todo el proyecto
import lenguajeMX from '@angular/common/locales/es-MX';
import lenguajeFR from '@angular/common/locales/fr';

import {registerLocaleData} from '@angular/common';

registerLocaleData(lenguajeMX);
registerLocaleData(lenguajeFR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],

  //todo esto se usa para cambiar el idioma en general
  providers: [{provide : LOCALE_ID, useValue: 'es-MX'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
