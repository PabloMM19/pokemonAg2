import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTrainerViewRoutedComponent } from './components/trainers/admin-trainer-view-routed/admin-trainer-view-routed.component';
import { AdminPokemonViewRoutedComponent } from './components/pokemon/admin-pokemon-view-routed/admin-pokemon-view-routed.component';
import { AdminTeamViewRoutedComponent } from './components/team/admin-team-view-routed/admin-team-view-routed.component';
import { HomeAppComponent } from './components/home/homeApp/homeApp.component';
import { AdminTrainerNewComponent } from './components/trainers/admin-trainer-new/admin-trainer-new.component';
import { AdminTrainerEditComponent } from './components/trainers/admin-trainer-edit/admin-trainer-edit.component';
import { AdminTeamNewComponent } from './components/team/admin-team-new/admin-team-new.component';
import { AdminTeamEditComponent } from './components/team/admin-team-edit/admin-team-edit.component';
import { AdminPokemonNewComponent } from './components/pokemon/admin-pokemon-new/admin-pokemon-new.component';
import { AdminPokemonEditComponent } from './components/pokemon/admin-pokemon-edit/admin-pokemon-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeAppComponent },
  { path: 'trainers', component: AdminTrainerViewRoutedComponent },
  { path: 'pokemon', component: AdminPokemonViewRoutedComponent },
  { path: 'teams', component: AdminTeamViewRoutedComponent },
  { path: 'trainers/new', component: AdminTrainerNewComponent },
  { path: 'trainers/edit/:id', component: AdminTrainerEditComponent },
  { path: 'teams/new', component: AdminTeamNewComponent },
  { path: 'teams/edit/:id', component: AdminTeamEditComponent },
  { path: 'pokemon/new', component: AdminPokemonNewComponent },
  { path: 'pokemon/edit/:id', component: AdminPokemonEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
