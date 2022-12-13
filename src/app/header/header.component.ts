import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { WidgetService } from '../services/widget.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog, public widgetService: WidgetService) { }

  ngOnInit(): void {
  }

  openAddDialog() {
    this.dialog.open(AddModalComponent)
  }
}
