import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-liked-cats',
  templateUrl: './liked-cats.component.html',
  styleUrls: ['./liked-cats.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LikedCatsComponent implements OnInit {
  cats: string[] = new Array();

  constructor() { }

  ngOnInit() {
  }

  addCat(cat) {
    console.log("We got cats" + cat);
    if (this.cats.indexOf(cat) < 0) {
      this.cats.push(cat);
    }
    console.log(this.cats);
  }
}
