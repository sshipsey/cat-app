import { Component, ViewChild } from '@angular/core';
import { CatComponent } from './cat/cat.component';
import { LikedCatsComponent } from './liked-cats/liked-cats.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild(LikedCatsComponent) likedCats: LikedCatsComponent;

  addCat(newCat) {
    console.log("???? " + newCat);
    this.likedCats.addCat(newCat);
  }

  title = 'cat-app';
}
