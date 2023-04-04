import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FlashcardEditComponent } from './flashcard-edit.component';
import { Router } from '@angular/router';
import { flashcardService } from '../../services/flashcardService';
import { FormBuilder } from '@angular/forms';

describe('FlashcardEditComponent', () => {
  let component: FlashcardEditComponent;
  let fixture: ComponentFixture<FlashcardEditComponent>;
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
    fixture = TestBed.createComponent(FlashcardEditComponent);
    component = fixture.componentInstance;
  });


  it('should create flashcard-edit', () => {
    expect(component).toBeTruthy();
  });
});
