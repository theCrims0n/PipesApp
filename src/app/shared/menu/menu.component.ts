import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items : MenuItem[]= [];

  constructor() { }

  activeMenu(event : any) {

    let node;
    if (event.target.tagName === "A") {
      node = event.target;
    } else {
      node = event.target.parentNode;
    }
    let menuitem = document.getElementsByClassName("ui-menuitem-link");
    for (let i = 0; i < menuitem.length; i++) {
      menuitem[i].classList.remove("active");
    }
    node.classList.add("active")
  }

  ngOnInit(): void {
      this.items = [
        {
          label: 'Pipes de angular'
          ,icon: 'pi pi-desktop',
          items: 
          [
            {
              label: 'Textos y Fechas',
              icon: 'pi pi-align-left',
              routerLink: '/'
            },
            {
              label: 'Números',
              icon: 'pi pi-dollar',
              routerLink: 'numeros'
            }
            ,
            {
              label: 'No comunes',
              icon: 'pi pi-globe',
              routerLink: 'no-comunes'
            }
          ]
        },
        {
          label: 'Pipes personalizados',
          icon: 'pi pi-cog'
        }
      ];
  }  

}


