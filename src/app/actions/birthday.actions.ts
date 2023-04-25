
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Birthday } from '../models/birthday';

@Injectable()
//Action
export class BirthdayActions {

  static ADD_BIRTHDAY = 'ADD_BIRTHDAY';
  addBirthday(birthday: Birthday): Action {
    console.log("Add BIRTHDAY");
    return {
      type: BirthdayActions.ADD_BIRTHDAY,

    }
  }

  static UPDATE_BIRTHDAY = 'UPDATE_BIRTHDAY';
  updateBirthday(birthday: Birthday): Action {
    console.log("Update BIRTHDAY");
    return {
      type: BirthdayActions.UPDATE_BIRTHDAY,

    }
  }

  static DELETE_BIRTHDAY = 'DELETE_BIRTHDAY';
  deleteBirthday(birthday: Birthday): Action {
    console.log("Delete BIRTHDAY");
    return {
      type: BirthdayActions.DELETE_BIRTHDAY,

    }
  }
}

