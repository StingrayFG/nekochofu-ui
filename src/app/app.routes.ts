import { Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/homePage/homePage.component'
import { ContentsPageComponent } from './components/pages/contentsPage/contentsPage.component'

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: ':uuid', component: ContentsPageComponent },
];
