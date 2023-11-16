import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTrainerViewRoutedComponent } from './components/trainers/admin-trainer-view-routed/admin-trainer-view-routed.component';
import { AdminPokemonViewRoutedComponent } from './components/pokemon/admin-pokemon-view-routed/admin-pokemon-view-routed.component';
import { AdminTeamViewRoutedComponent } from './components/team/admin-team-view-routed/admin-team-view-routed.component';
import { HomeAppComponent } from './components/home/homeApp/homeApp.component';
import { AdminTrainerNewComponent } from './components/trainers/admin-trainer-new/admin-trainer-new.component';
import { AdminTrainerEditComponent } from './components/trainers/admin-trainer-edit/admin-trainer-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeAppComponent },
  { path: 'trainers', component: AdminTrainerViewRoutedComponent },
  { path: 'pokemon', component: AdminPokemonViewRoutedComponent },
  { path: 'teams', component: AdminTeamViewRoutedComponent },
  { path: 'trainers/new', component: AdminTrainerNewComponent },
  { path: 'trainers/edit', component: AdminTrainerEditComponent },
  { path: 'trainers/edit/:id', component: AdminTrainerEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
