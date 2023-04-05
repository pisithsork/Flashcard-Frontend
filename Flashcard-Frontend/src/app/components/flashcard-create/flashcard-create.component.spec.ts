  import { ComponentFixture, TestBed } from '@angular/core/testing';
  import { HttpClientTestingModule } from '@angular/common/http/testing';
  import { FlashcardCreateComponent } from './flashcard-create.component';
  import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
  import { Router } from '@angular/router';
  import { flashcardService } from '../../services/flashcardService';
  import { FlashcardEditComponent } from '../flashcard-edit/flashcard-edit.component';
  import { flashcard } from '../../models/flashcard';
  import { defer } from 'rxjs/internal/observable/defer';
  import { of } from 'rxjs/internal/observable/of';
  import { Observable } from 'rxjs/internal/Observable';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';

  describe('FlashcardCreateComponent', () => {
    let component: FlashcardCreateComponent;
    let fixture: ComponentFixture<FlashcardCreateComponent>;
    let spyRouter: jasmine.SpyObj<Router>;
    let spyService: flashcardService;
    let spyForm: jasmine.SpyObj<FormBuilder>;

    beforeEach(async () => {
      spyRouter = jasmine.createSpyObj(['navigateByUrl']);
      spyForm = jasmine.createSpyObj('FormBuilder', ['group']);
      spyService = jasmine.createSpyObj(['createflashcard']);
      TestBed.configureTestingModule({
        declarations: [FlashcardCreateComponent],
        imports: [HttpClientTestingModule, CommonModule, BrowserModule, ReactiveFormsModule, AppRoutingModule, ReactiveFormsModule],
        providers: [
          { provide: Router, useValue: spyRouter },
          { provide: flashcardService, useValue: spyService },
          { provide: FormBuilder, useValue: spyForm }
        ]
      }).compileComponents();

      spyService = TestBed.inject(flashcardService);
      fixture = TestBed.createComponent(FlashcardCreateComponent);
      component = fixture.componentInstance;
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(FlashcardCreateComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });


    it('should create flashcard-create', () => {
      expect(component).toBeTruthy();
    });

    it('should call back', () => {
      component.back();
      spyRouter.navigateByUrl.and.callFake;
      expect(spyRouter.navigateByUrl.calls.count()).toBe(1);
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
    //   component.submit();

    //   // Assert
    //   expect(component.newflashcard).toEqual(expectedFlashcard);
    //   expect(spyService.createflashcard).toHaveBeenCalledWith(expectedFlashcard);
    //   expect(spyRouter.navigateByUrl).toHaveBeenCalledWith('');

    //   // Cleanup
    //   document.body.removeChild(questionInput);
    //   document.body.removeChild(answerInput);
    // })
  });
