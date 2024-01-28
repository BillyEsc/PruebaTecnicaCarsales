import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { LocationComponent } from './components/location/location.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharactersDialogComponent } from './components/character/character-info-dialog/characters-info-dialog.component';
import { MaterialModule } from './modules/material/material.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ListCharactersDialogComponent } from './components/episode/list-characters-dialog/list-characters-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeComponent,
    CharacterComponent,
    LocationComponent,
    CharactersDialogComponent,
    HeaderComponent,
    FooterComponent,
    ListCharactersDialogComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
