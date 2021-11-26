import { Component, OnInit } from '@angular/core';
import { RoutingManager } from '../app-routing.manager';
import { HtmlLink } from '../app-routing.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  constructor(private routingManager: RoutingManager) { }
  get links(): Array<HtmlLink> { return this.routingManager.htmlLinks; }
  ngOnInit(): void { }
}
