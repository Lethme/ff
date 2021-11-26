import { ScriptService } from './service/script/script.service';
import { StyleService } from './service/style/style.service';
import { Component, OnInit } from '@angular/core';
import { RoutingManager } from './app-routing.manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'FamilyFarm';
  constructor(private styleService: StyleService, private scriptService: ScriptService) { }

  ngOnInit(): void {
    this.styleService.loadAll().then(data => {
      console.log("styles loaded", data);
    }).catch(err => console.log(err));

    this.scriptService.loadAll().then(data => {
      console.log("scripts loaded", data);
    }).catch(err => console.log(err));
  }
}