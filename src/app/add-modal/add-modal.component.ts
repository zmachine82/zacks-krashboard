import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Widget } from '../models/widget';
import { WidgetService } from '../services/widget.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {




  newWidgetForm = new FormGroup<WidgetForm>({
    name: new FormControl<string>('', Validators.required),
    url: new FormControl<string>('',  Validators.required),
    path: new FormControl<string>(''),
  })

  constructor(private widgetService: WidgetService, private dialogRef: MatDialogRef<AddModalComponent>) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.newWidgetForm.valid) {
      const widget = this.newWidgetForm.value as Widget

      this.widgetService.addWidget(widget)
      this.dialogRef.close()
    }
  }
}

interface WidgetForm  {
  name: FormControl<string | null>
  url: FormControl<string | null>
  path: FormControl<string | null>
}
