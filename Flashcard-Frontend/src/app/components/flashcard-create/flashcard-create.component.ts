import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { flashcard } from '../../models/flashcard';
import { flashcardService } from '../../services/flashcardService';

@Component({
  selector: 'app-flashcard-create',
  templateUrl: './flashcard-create.component.html',
  styleUrls: ['./flashcard-create.component.css']
})
export class FlashcardCreateComponent implements OnInit {
  formdata: any;
  newflashcard: flashcard = new flashcard(0, "", "");
  public questionAnswerForm!: FormGroup;

  constructor(private router: Router, private flashcardService: flashcardService, private formBuilder: FormBuilder) {
    this.questionAnswerForm = this.formBuilder.group({
      question: ['', Validators.required],
      answer: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  submit(): void {
    this.newflashcard.id = 0;
    this.newflashcard.question = (<HTMLInputElement>document.getElementById("new-question-input")).value;
    this.newflashcard.answer = (<HTMLInputElement>document.getElementById("new-answer-input")).value;
    console.log(`ID: ${this.newflashcard.id}Question: ${this.newflashcard.question}Answer: ${this.newflashcard.answer}`);
    this.flashcardService.createflashcard(this.newflashcard).subscribe(
      (resp) => {
        console.log('Created new Flashcard ' + resp)
        this.router.navigateByUrl('');
      },
      (err) => {
        console.log('Error: ' + err)
      }
    )
  }

  back(): void {
    this.router.navigateByUrl('');
  }

}
