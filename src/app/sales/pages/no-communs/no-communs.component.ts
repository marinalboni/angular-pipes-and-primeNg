import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-communs',
  templateUrl: './no-communs.component.html',
  styles: [
  ]
})
export class NoCommunsComponent {

  //i18nSelect
  name: string = 'Fernanda';
  gender: string = 'female';

  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };
  
  changeUser() {
    if(this.name === 'Fernanda') {
      this.name = 'Juan';
      this.gender = 'male';
    } else {
      this.name = 'Fernanda';
      this.gender = 'female';
    }
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Fabio', 'Jose', 'Adrian'];
  
  clientMap = {
    '=0': 'no tenemos ningún cliente ',
    '=1': 'tenemos 1 cliente',
    'other': `tenemos # clientes`
  };

  deleteUser() {
    this.clientes.pop()
  };

  //KeyValue & Json Pipe
  person = {
    name: 'Amanda',
    age: 31,
    address: 'Ottawa, Canadá'
  };

  //Async pipe
  myObservable = interval(1000);

}
