import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FlashcardEditComponent } from './flashcard-edit.component';
import { Router } from '@angular/router';
import { flashcardService } from '../../services/flashcardService';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { flashcard } from '../../models/flashcard';

describe('FlashcardEditComponent', () => {
  let component: FlashcardEditComponent;
  let fixture: ComponentFixture<FlashcardEditComponent>;
  let spyRouter: jasmine.SpyObj<Router>;
  let spyService: flashcardService;
  let spyForm: jasmine.SpyObj<FormBuilder>;

  beforeEach(async () => {
    spyRouter = jasmine.createSpyObj('Router', ['navigate']);
    spyForm = jasmine.createSpyObj('FormBuilder', ['group']);
    spyService = jasmine.createSpyObj(['editflashcard']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: Router, useValue: spyRouter },
        { provide: flashcardService, useValue: spyService },
        { provide: FormBuilder, useValue: spyForm }
      ]
    });
    spyService = TestBed.inject(flashcardService);
    fixture = TestBed.createComponent(FlashcardEditComponent);
    component = fixture.componentInstance;
  });


  it('should create flashcard-edit', () => {
    expect(component).toBeTruthy();
  });

  // it('should call submit', () => {
  //   const questionInput = document.createElement('input');
  //   questionInput.id = 'new-question-input';
  //   const answerInput = document.createElement('input');
  //   answerInput.id = 'new-answer-input';
  //   document.body.appendChild(questionInput);
  //   document.body.appendChild(answerInput);
  //   questionInput.value = 'Question';
  //   answerInput.value = 'Answer';
  //   const expectedFlashcard: flashcard = new flashcard(0, 'Question', 'Answer');
  //   //spyService.createflashcard.and.returnValue(of({}));
  //   // spyService = TestBed.inject(flashcardService);
  //   spyOn(spyService, 'createflashcard').and.returnValue(of(expectedFlashcard))
  //   //spyOn(spyService, 'createflashcard').and.returnValue(of({}));

  //   // Act
  //   component.editflashcard();

  //   // Assert
  //   expect(component.data).toEqual(expectedFlashcard);
  //   expect(spyService.createflashcard).toHaveBeenCalledWith(expectedFlashcard);
  //   expect(spyRouter.navigateByUrl).toHaveBeenCalledWith('');

  //   // Cleanup
  //   document.body.removeChild(questionInput);
  //   document.body.removeChild(answerInput);
  // })

  
});
