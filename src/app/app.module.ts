import { StyleService } from './service/style/style.service';
import { ScriptService } from './service/script/script.service';
import { RoutingManager } from './app-routing.manager';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { EngageComponent } from './pages/engage/engage.component';
import { GetinvolvedComponent } from './pages/getinvolved/getinvolved.component';
import { LearnComponent } from './pages/learn/learn.component';
import { WorkComponent } from './pages/work/work.component';
import { CertificationComponent } from './pages/certification/certification.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavLinkComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    EngageComponent,
    GetinvolvedComponent,
    LearnComponent,
    WorkComponent,
    CertificationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ScriptService,
    StyleService,
    RoutingManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
