import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FlashcardCreateComponent } from './flashcard-create.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { flashcardService } from '../../services/flashcardService';
import { FlashcardEditComponent } from '../flashcard-edit/flashcard-edit.component';
import { flashcard } from '../../models/flashcard';
import { defer } from 'rxjs/internal/observable/defer';

describe('FlashcardCreateComponent', () => {
  let component: FlashcardCreateComponent;
  let fixture: ComponentFixture<FlashcardCreateComponent>;
  let spyRouter: jasmine.SpyObj<Router>;
  let spyService: flashcardService;
  let spyForm: jasmine.SpyObj<FormBuilder>;

  beforeEach(async () => {

    TestBed.configureTestingModule({
      declarations: [FlashcardCreateComponent],
      imports: [HttpClientTestingModule],
      providers: [
        FormBuilder,
        { provide: Router, useValue: spyRouter },
        { provide: flashcardService, useValue: spyService },
        { provide: FormBuilder, useValue: spyForm }
      ]
    }).compileComponents();
    spyRouter = jasmine.createSpyObj(['navigateByUrl']);
    spyForm = jasmine.createSpyObj(['Formgroup']);
    spyService = jasmine.createSpyObj(['createflashcard']);
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

  it('should call submit', () => {
    component.newflashcard = new flashcard(0, "", "");
    component.submit();
    expect(spyService.createflashcard).toHaveBeenCalledWith(component.newflashcard);
    expect(spyRouter.navigateByUrl).toHaveBeenCalledWith('');
  })
});
