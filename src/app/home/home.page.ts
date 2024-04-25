import { Component } from '@angular/core';
import { DetailsPage } from './../details/details.page';

import { ChangeDetectionStrategy } from '@angular/core';
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
    this.birthdays = this.store.select((state) => state.birthdays);
  }
  br: Birthday = {
    id: '',
    Name: 'Name',
    Date: new Date(),
  };
  birs: Birthday[] = [];
  async showDetail(birthday: any) {
    const modal = await this.modalCtrl.create({
      component: DetailsPage,
      componentProps: {
        birthday: this.br,
      },
    });
    modal.present();

    modal.onDidDismiss().then((data) => {
      console.log('Story');
      console.log(this.birthdays);
    });
    modal.onDidDismiss().then((data) => {
      console.log(data);
      const br1 = data['data']; // Тут обираємо день народження!
      console.log('data came back from modal');
      console.log(br1);
      this.addBrday(br1);
    });
  }
  addBrday(br: Birthday) {
    if (br as Birthday) if ('Name' in br && 'Date' in br) this.birs.push(br);
    console.log(br);
  }
}
