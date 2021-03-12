/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: any[] = [];

  search = {
    keyword: 'demo1',
  };
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<any[]>('/api/articles.json').subscribe(results => {
      this.data = results;
    });
  }
  doSearch(value: string, elm?: HTMLInputElement): void {
    this.search.keyword = value;
    if (elm && !value) {
      elm.value = '';
    }
  }
}
