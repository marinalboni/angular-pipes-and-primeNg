import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  nameFull: string = 'tHIs IS a nAMe';

  date: Date = new Date();

}
