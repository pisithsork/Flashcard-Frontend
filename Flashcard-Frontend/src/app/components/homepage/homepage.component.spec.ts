import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';
import { Router } from '@angular/router';
import { flashcardService } from '../../services/flashcardService';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  let spyRouter: jasmine.SpyObj<Router>;
  let spyService: jasmine.SpyObj<flashcardService>;

  beforeEach(async () => {
    spyRouter = jasmine.createSpyObj(['navigateByUrl']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [{ provide: Router, useValue: spyRouter }]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(HomepageComponent);
      component = fixture.componentInstance;
    });

  });

  it('should create homepage', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit'), () => {
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled;
  }

  // it('should call Flashcard', () => {
  //   component.addFlashcard();
  //   expect(spyRouter).toHaveBeenCalled();
  // });
});
