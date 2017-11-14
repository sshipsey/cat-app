import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';
import { CatButtonsComponent } from './cat-buttons/cat-buttons.component';
import { LikedCatsComponent } from './liked-cats/liked-cats.component';


@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    CatButtonsComponent,
    LikedCatsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
