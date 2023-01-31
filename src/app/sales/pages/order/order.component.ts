import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  //personalizeduppercase
  textToChange: string = 'Pretend there is something important here';
  doIWantUppercase: boolean = false;

  toggleText(): void {
    this.doIWantUppercase = !this.doIWantUppercase;
  }

  //table
  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red
    }
  ]

  //order
  ordenarPor: string = '';

} 
