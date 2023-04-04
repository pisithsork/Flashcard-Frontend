import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FlashcardCreateComponent } from './flashcard-create.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { flashcardService } from '../../services/flashcardService';
import { FlashcardEditComponent } from '../flashcard-edit/flashcard-edit.component';

describe('FlashcardCreateComponent', () => {
  let component: FlashcardCreateComponent;
  let fixture: ComponentFixture<FlashcardCreateComponent>;
  let spyRouter: jasmine.SpyObj<Router>;
  let spyService: flashcardService;
  let spyForm: jasmine.SpyObj<FormBuilder>;

  beforeEach(async () => {
    spyRouter = jasmine.createSpyObj('Router', ['navigate']);
    spyForm = jasmine.createSpyObj('FormBuilder', ['group']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: Router, useValue: spyRouter },
        { provide: flashcardService, useValue: spyService },
        { provide: FormBuilder, useValue: spyForm }
      ]
    });
    spyService = TestBed.inject(flashcardService);
    fixture = TestBed.createComponent(FlashcardCreateComponent);
    component = fixture.componentInstance;
  });

  it('should create flashcard-create', () => {
    expect(component).toBeTruthy();
  });
});
