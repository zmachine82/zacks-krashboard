import { Injectable } from '@angular/core';
import { Widget } from '../models/widget';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  addToStorage(widgets: Widget[]) {
    localStorage.setItem(this.widgetsKey, JSON.stringify(widgets))
  }

  loadFromStorage() {
    return JSON.parse(localStorage.getItem(this.widgetsKey) || '[]')
  }

  private get widgetsKey(): string {
    return 'widgets';
  }
}
