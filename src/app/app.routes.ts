import { Routes } from '@angular/router';
import { HomePageComponent } from './homePage/homePage.component'
import { ContentsPageComponent } from './contentsPage/contentsPage.component'

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: ':uuid', component: ContentsPageComponent },
];
