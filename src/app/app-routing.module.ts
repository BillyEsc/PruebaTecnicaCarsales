import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeComponent } from './components/episode/episode.component';
import { CharacterComponent } from './components/character/character.component';
import { LocationComponent } from './components/location/location.component';

const routes: Routes = [
  {path: 'episodes', component: EpisodeComponent},
  {path: 'characters', component: CharacterComponent},
  {path: 'locations', component: LocationComponent},
  { path: '', redirectTo: '/characters', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
