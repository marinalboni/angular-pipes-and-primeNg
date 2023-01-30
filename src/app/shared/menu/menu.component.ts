import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  items: MenuItem[] = [
    {
      label: 'Angular Pipes',
      icon: 'pi pi-desktop',
      items: [
        {
          label: 'Dates and Texts',
          icon: 'pi pi-align-left',
          routerLink: '/'
        },
        {
          label: 'Numbers',
          icon: 'pi pi-dollar',
          routerLink: 'numbers'
        },
        {
          label: 'Not commons',
          icon: 'pi pi-globe',
          routerLink: 'not-commons'
        }
      ]
    },
    {
      label: 'Personalized Pipes',
      icon: 'pi pi-cog'
    }
  ];
}
