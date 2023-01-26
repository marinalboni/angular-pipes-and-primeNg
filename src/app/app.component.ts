import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = 'Marina';
  value: number = 3834;

  showName() {
    console.log(this.name, this.value)
  }
}
