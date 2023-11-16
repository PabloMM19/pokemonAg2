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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
