import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeersComponent } from './components/beers/beers.component';
import { BeerComponent } from './components/beer/beer.component';

import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './components/hero/hero.component';
@NgModule({
  declarations: [AppComponent, BeersComponent, BeerComponent, HeroComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
