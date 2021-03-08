import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  sitename = 'Hello Angular 11';
  sitelogo = '/assets/images/angular11_logo.png';
  subtitle = 'Angular 11 新手開發練功坊課程實作練習';
  logoname = 'The Will Will Web';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.sitename = 'Hello Word';
      this.subtitle = '練習練習';
    }, 2000);
  }
}
