import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { WidgetService } from '../services/widget.service';

@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.css']
})
export class WidgetContainerComponent implements OnInit {

  constructor(public widgetService: WidgetService, private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddModal() {
    this.matDialog.open(AddModalComponent)
  }

}
