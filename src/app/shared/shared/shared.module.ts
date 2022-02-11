import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { PrimeNgModuleModule } from 'src/app/primeNg/prime-ng-module/prime-ng-module.module';

@NgModule({
  declarations: [MenuComponent],

  imports: [
    CommonModule,
    PrimeNgModuleModule
  ],
  exports:[
    MenuComponent,
    PrimeNgModuleModule
    ]
})
export class SharedModule { }
