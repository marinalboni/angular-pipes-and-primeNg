import { Component } from '@angular/core';

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
  
  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Fabio', 'Jose', 'Adrian'];
  
  clientMap = {
    '=0': 'no tenemos ningún cliente ',
    '=1': 'tenemos 1 cliente',
    'other': `tenemos # clientes`
  };

  //functions
  changeUser() {
    if(this.name === 'Fernanda') {
      this.name = 'Juan';
      this.gender = 'male';
    } else {
      this.name = 'Fernanda';
      this.gender = 'female';
    }
  }

  deleteUser() {
    this.clientes.pop()
  };

}
