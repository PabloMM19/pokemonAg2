import { AdminTrainerFormEComponent } from './components/trainers/admin-trainer-formE/admin-trainer-formE.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminTrainerViewRoutedComponent } from './components/trainers/admin-trainer-view-routed/admin-trainer-view-routed.component';
import { AdminTrainerViewUnroutedComponent } from './components/trainers/admin-trainer-view-unrouted/admin-trainer-view-unrouted.component';
import { MenuAppComponent } from './components/shared/menu/menuApp/menuApp.component';
import { AdminPokemonViewUnroutedComponent } from './components/pokemon/admin-pokemon-view-unrouted/admin-pokemon-view-unrouted.component';
import { AdminPokemonViewRoutedComponent } from './components/pokemon/admin-pokemon-view-routed/admin-pokemon-view-routed.component';
import { AdminTeamViewUnroutedComponent } from './components/team/admin-team-view-unrouted/admin-team-view-unrouted.component';
import { AdminTeamViewRoutedComponent } from './components/team/admin-team-view-routed/admin-team-view-routed.component';
import { FooterAppComponent } from './components/shared/footer/footerApp/footerApp.component';
import { HomeAppComponent } from './components/home/homeApp/homeApp.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminTrainerEditComponent } from './components/trainers/admin-trainer-edit/admin-trainer-edit.component';
import { AdminTrainerNewComponent } from './components/trainers/admin-trainer-new/admin-trainer-new.component';
import { AdminTrainerFormComponent } from './components/trainers/admin-trainer-form/admin-trainer-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminTeamFormComponent } from './components/team/admin-team-form/admin-team-form.component';
import { AdminTeamEditComponent } from './components/team/admin-team-edit/admin-team-edit.component';
import { AdminTeamNewComponent } from './components/team/admin-team-new/admin-team-new.component';
import { AdminPokemonNewComponent } from './components/pokemon/admin-pokemon-new/admin-pokemon-new.component';
import { AdminPokemonEditComponent } from './components/pokemon/admin-pokemon-edit/admin-pokemon-edit.component';
import { AdminPokemonFormComponent } from './components/pokemon/admin-pokemon-form/admin-pokemon-form.component';
import { AdminPokemonFormEComponent } from './components/pokemon/admin-pokemon-formE/admin-pokemon-formE.component';
import { AdminTeamFormEComponent } from './components/team/admin-team-formE/admin-team-formE.component';
import { TrainerLoginRoutedComponent } from './components/trainers/trainer-login-routed/trainer-login-routed.component';
import { TrainerLoginUnroutedComponent } from './components/trainers/trainer-login-unrouted/trainer-login-unrouted.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminTrainerViewRoutedComponent,
    AdminTrainerViewUnroutedComponent,
    AdminPokemonViewRoutedComponent,
    AdminPokemonViewUnroutedComponent,
    AdminTeamViewRoutedComponent,
    AdminTeamViewUnroutedComponent,
    MenuAppComponent,
    FooterAppComponent,
    HomeAppComponent,
    AdminTrainerNewComponent,
    AdminTrainerEditComponent,
    AdminTrainerFormComponent,
    AdminTeamFormComponent,
    AdminTeamNewComponent,
    AdminTeamEditComponent,
    AdminPokemonFormComponent,
    AdminPokemonNewComponent,
    AdminPokemonEditComponent,
    AdminTrainerFormEComponent,
    AdminPokemonFormEComponent,
    AdminTeamFormEComponent,
    TrainerLoginRoutedComponent,
    TrainerLoginUnroutedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
