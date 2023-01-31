import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommunsComponent } from './pages/no-communs/no-communs.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PersonalizedUppercasePipe } from './pipes/uppercase.pipe';
import { PersonalizedCanFlyPipe } from './pipes/canfly.pipe';
import { OrderPipe } from './pipes/order.pipe';




@NgModule({
  declarations: [
    NumbersComponent,
    NoCommunsComponent,
    BasicsComponent,
    OrderComponent,
    PersonalizedUppercasePipe,
    PersonalizedCanFlyPipe,
    OrderPipe
  ],
  exports: [
    NumbersComponent,
    NoCommunsComponent,
    BasicsComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
