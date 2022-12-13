import { Injectable } from '@angular/core';
import { Widget } from '../models/widget';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  widgets: Widget[] = []

  constructor(private storageService: StorageService) {
    this.widgets = this.storageService.loadFromStorage();
  }

  addWidget(widget: Widget) {
    this.widgets.push(widget)
    this.saveWidgets();
  }

  deleteWidget(widget: Widget) {
    this.widgets = this.widgets.filter(x => x !== widget)
    this.saveWidgets();
  }

  clearWidgets() {
    this.widgets = []
    this.saveWidgets();
  }

  private saveWidgets() {
    this.storageService.addToStorage(this.widgets);
  }
}
