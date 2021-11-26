import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CertificationComponent } from './pages/certification/certification.component';
import { WorkComponent } from './pages/work/work.component';
import { LearnComponent } from './pages/learn/learn.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GetinvolvedComponent } from './pages/getinvolved/getinvolved.component';
import { EngageComponent } from './pages/engage/engage.component';

export enum LinkType {
  RouterLink,
  AppLink
}

export interface Link {
  route: string,
  type: LinkType,
  text?: string | undefined,
  component?: any | undefined
}

export interface HtmlLink {
  route: string,
  text: string | undefined,
  active: boolean
}

export const links: Array<Link> = [
  { route: '', text: "Home", type: LinkType.AppLink, component: HomeComponent },
  { route: 'engage', text: "Engage Your Business", type: LinkType.AppLink, component: EngageComponent },
  { route: 'getinvolved', text: "Get Involved", type: LinkType.AppLink, component: GetinvolvedComponent },
  { route: 'learn', text: "Teach & Learn", type: LinkType.AppLink, component: LearnComponent },
  { route: 'work', text: "Our Work", type: LinkType.AppLink, component: WorkComponent },
  { route: 'certification', text: "Certification", type: LinkType.AppLink, component: CertificationComponent },
  { route: '**', type: LinkType.RouterLink, component: NotFoundComponent },
];

const routes: Routes = links.map(link => {
  return { path: link.route, component: link.component }
});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
