import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {
  constructor() {
  }

  static getItem(key) {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
  }

  static setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static removeItem(key) {
    localStorage.removeItem(key);
  }

  static clearAll() {
    localStorage.clear();
  }
}
