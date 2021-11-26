import { Feature } from './../pages/home/home.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input() features: Array<Feature> | undefined;
  constructor() { }

  ngOnInit(): void {
  }
}
