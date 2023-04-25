import { Injectable } from '@angular/core';
import { Birthday } from '../models/birthday';
//Стан

export interface AppState {
    birthdays: Birthday[];
}
