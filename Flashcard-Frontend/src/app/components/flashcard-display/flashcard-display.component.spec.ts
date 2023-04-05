import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardDisplayComponent } from './flashcard-display.component';
import { Router } from '@angular/router';

describe('FlashcardDisplayComponent', () => {
  let component: FlashcardDisplayComponent;
  let fixture: ComponentFixture<FlashcardDisplayComponent>;
  let spyRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    component = new FlashcardDisplayComponent(spyRouter);
    var show = false;
  });

  it('should create flashcard-display', () => {
    expect(component).toBeTruthy();
  });

  it('should call toShow to true', () => {
    component.show = false;
    component.toShow();
    expect(component.show).toBe(true);
  })

    it('should call toShow to false', () => {
    component.show = true;
    component.toShow();
    expect(component.show).toBe(false);
  })

  it('should call toEdit to false', () => {
    component.edit = true;
    component.toEdit();
    expect(component.edit).toBe(false);
  })

  it('should call toEdit to true', () => {
    component.edit = false;
    component.toEdit();
    expect(component.edit).toBe(true);
  })

});
