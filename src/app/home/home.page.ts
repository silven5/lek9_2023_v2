import { Component } from '@angular/core';
import { DetailsPage } from './../details/details.page';

import { ChangeDetectionStrategy } from "@angular/core";
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../services/app-state';
import { Birthday } from '..//models/birthday';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public birthdays: Observable<Birthday[]>;
  constructor(
    private nav: NavController,
    private store: Store<AppState>,
    private modalCtrl: ModalController
  ) {

    this.birthdays = this.store.select(state => state.birthdays);
  }
  async showDetail(birthday: any) {
    console.log("Hello!!!");
    let modal = await this.modalCtrl.create({
      component: DetailsPage,
      componentProps: { birthday }
    });
    await modal.present();
  }

}
