import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cat-buttons',
  templateUrl: './cat-buttons.component.html',
  styleUrls: ['./cat-buttons.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CatButtonsComponent implements OnInit {
  @Output() dislikeCatEmitter = new EventEmitter();
  @Output() likeCatEmitter = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  dislikeCat() {
    this.dislikeCatEmitter.emit()
  }

  likeCat() {
    this.likeCatEmitter.emit();
  }
}
