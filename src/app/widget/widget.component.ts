import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { catchError, delay } from 'rxjs/operators';
import { Widget } from '../models/widget';
import { WidgetService } from '../services/widget.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  @Input() widget!: Widget;
  result: any = ''
  loading = false

  constructor(private http: HttpClient, public widgetService: WidgetService) { }

  ngOnInit(): void {
   this.loadData()
  }

  loadData() {
    this.loading = true
    this.http.get(this.widget.url, { headers: { Accept: 'application/json' } }).pipe(catchError((x) => {
      this.loading = false
      return x;
    })).subscribe((res: any) => {
      this.getPath(res)
      this.loading = false
    }, )
  }

  private getPath(res: any) {
    const paths = this.widget.path.split('.');
    if (paths.length > 1) {
      let copy = Object.assign({}, res)
      paths.forEach(p => {
        copy = copy[p]
      })
      this.result = copy || res
    } else {

      this.result = res[this.widget.path] || res
    }
  }

}
