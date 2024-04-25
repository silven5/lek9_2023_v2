import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Store, StoreModule } from '@ngrx/store';
import { MyHeaderComponent } from '../my-header/my-header.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    StoreModule.forRoot({}),
  ],
  declarations: [HomePage, MyHeaderComponent],
  providers: [Store, StoreModule],
})
export class HomePageModule {}
