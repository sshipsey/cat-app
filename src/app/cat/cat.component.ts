import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { CatButtonsComponent } from '../cat-buttons/cat-buttons.component';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CatComponent implements OnInit {
  @Output() likedCat = new EventEmitter<string>();

  catUrl: string;

  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get('http://thecatapi.com/api/images/get')
      .subscribe((data) => {this.catUrl = data.url.toString()});
  }

  
  newCat() {
    this.ngOnInit();
  }

  addCat() {
    this.likedCat.emit(this.catUrl);
    this.newCat();
  }

}
