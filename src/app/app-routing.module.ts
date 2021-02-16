import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityListComponent } from './components/city-list/city-list.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cityList', component: CityListComponent },
  { path: 'map', component: MapComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
