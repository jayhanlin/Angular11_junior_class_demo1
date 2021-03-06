/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Article } from './Article';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data$: Observable<Article[]> = of([]);
  search = {
    keyword: 'demo1',
  };
  constructor(private datasvc: DataService) {}
  ngOnInit(): void {
    // this.datasvc.loadArticles().subscribe((results) => {
    //   this.data = results;
    // });
    this.data$ = this.datasvc.loadArticles();
  }
  doSearch(value: string, elm?: HTMLInputElement): void {
    this.search.keyword = value;
    if (elm && !value) {
      elm.value = '';
    }
  }
}
