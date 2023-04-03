import { Component, Input, OnInit } from '@angular/core';
import { flashcard } from '../../models/flashcard';

@Component({
  selector: 'app-flashcard-display',
  templateUrl: './flashcard-display.component.html',
  styleUrls: ['./flashcard-display.component.css']
})
export class FlashcardDisplayComponent implements OnInit {

  public show = false;

  @Input() flashcardInfo!: flashcard;
  ngOnInit(): void {
  }

  toShow(): void {
    if (this.show == false) {
      this.show = true;
    }
    else {
      this.show = false;
    }
  }


}
