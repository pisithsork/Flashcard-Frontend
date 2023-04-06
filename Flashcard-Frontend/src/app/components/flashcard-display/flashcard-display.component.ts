import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { flashcard } from '../../models/flashcard';
import { FlashcardEditComponent } from '../flashcard-edit/flashcard-edit.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-flashcard-display',
  templateUrl: './flashcard-display.component.html',
  styleUrls: ['./flashcard-display.component.css']
})
export class FlashcardDisplayComponent {

  constructor(private router: Router){}

  public show = false;
  public edit = false;

  @Input() flashcardInfo!: flashcard;
  @Input() counter!: number;
  @ViewChild('question-text', { static: false }) currentQuestionInput!: ElementRef;
  @ViewChild('answer-text', { static: false }) currentAnswerInput!: ElementRef;




  toShow(): void {
    if (this.show == false) {
      this.show = true;
    }
    else {
      this.show = false;
    }
  }

  toEdit(): void{
    if (this.edit == false) {
      this.edit = true;
    }
    else {
      this.edit = false;
    }
  }




}
