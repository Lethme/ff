import { HtmlLink } from './../app-routing.module';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.less']
})
export class NavLinkComponent implements OnInit {
  @Input() link: HtmlLink | undefined;
  constructor() { }
  ngOnInit(): void { }
}
