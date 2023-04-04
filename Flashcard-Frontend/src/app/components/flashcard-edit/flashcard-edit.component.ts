import { Component, Input } from '@angular/core';
import { flashcard } from '../../models/flashcard';
import { flashcardService } from '../../services/flashcardService';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-flashcard-edit',
  templateUrl: './flashcard-edit.component.html',
  styleUrls: ['./flashcard-edit.component.css']
})
export class FlashcardEditComponent {

  editForm!: FormGroup;
  @Input() data!: flashcard; // receive data from parent
  
  constructor(private router: Router, private flashcardService: flashcardService, private formBuilder: FormBuilder) {
    this.editForm = this.formBuilder.group({
      question: ['', Validators.required],
      answer: ['', Validators.required]
    });
  }


  editflashcard(): void {
    this.data.question = (<HTMLInputElement>document.getElementById("new-question")).value;
    this.data.answer = (<HTMLInputElement>document.getElementById("new-answer")).value;
    this.flashcardService.editflashcard(this.data).subscribe(
      (resp) => {
        console.log('Edited Flashcard ' + resp)
        this.router.navigateByUrl('');
      },
      (err) => {
        console.log('Error: ' + err)
      }
    )
  }

}
