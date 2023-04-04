import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardDisplayComponent } from './flashcard-display.component';
import { Router } from '@angular/router';

describe('FlashcardDisplayComponent', () => {
  let component: FlashcardDisplayComponent;
  let fixture: ComponentFixture<FlashcardDisplayComponent>;
  let spyRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    component = new FlashcardDisplayComponent(spyRouter);
  });

  it('should create flashcard-display', () => {
    expect(component).toBeTruthy();
  });
});
