import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardDisplayComponent } from './flashcard-display.component';

describe('FlashcardDisplayComponent', () => {
  let component: FlashcardDisplayComponent;
  let fixture: ComponentFixture<FlashcardDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
