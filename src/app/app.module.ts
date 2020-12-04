import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeedListComponent } from './seed-list/seed-list.component';
import { FormsModule } from '@angular/forms';
import { DicogolloAboutComponent } from './dicogollo-about/dicogollo-about.component';
import { DicogolloSeedsComponent } from './dicogollo-seeds/dicogollo-seeds.component';
import { SeedCartComponent } from './seed-cart/seed-cart.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  declarations: [
    AppComponent,
    SeedListComponent,
    DicogolloAboutComponent,
    DicogolloSeedsComponent,
    SeedCartComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
