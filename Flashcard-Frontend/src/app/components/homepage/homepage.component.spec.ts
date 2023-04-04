import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';
import { Router } from '@angular/router';
import { flashcardService } from '../../services/flashcardService';
import { flashcard } from '../../models/flashcard';
import { defer } from 'rxjs/internal/observable/defer';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  let spyRouter: jasmine.SpyObj<Router>;
  let spyService: jasmine.SpyObj<flashcardService>;

  beforeEach(async () => {
    spyRouter = jasmine.createSpyObj(['navigateByUrl']);
    component = new HomepageComponent(spyService, spyRouter);
  });

  it('should create homepage', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit'), () => {
    var flashcards: flashcard[];
    spyService.getData.and.returnValue(defer(() => Promise.resolve(flashcards)));
    component.ngOnInit();
    expect(component.flashcards != null);
  }

  it('should call addFlashcard', () => {
    component.addFlashcard();
    spyRouter.navigateByUrl.and.callFake;
    expect(spyRouter.navigateByUrl.calls.count()).toBe(1);
  });
});
