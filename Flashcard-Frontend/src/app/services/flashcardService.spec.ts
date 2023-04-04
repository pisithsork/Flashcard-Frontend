import { HttpClient } from "@angular/common/http"
import { flashcardService } from "./flashcardService";
import { defer } from "rxjs/internal/observable/defer";
import { flashcard } from "../models/flashcard";


describe('flashcardService', () => {
    let spy: jasmine.SpyObj<HttpClient>;
    let component: flashcardService;


    beforeEach(async () => {
        component = new flashcardService(spy);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

describe ('flashcardService methods', () => {
    let spy: jasmine.SpyObj<HttpClient>;
    let component: flashcardService;

    beforeEach(async () => {
        spy = jasmine.createSpyObj(["post", "get", "put"]);
        component = new flashcardService(spy);
    });

    it('should call getData', () => {
        spy.get.and.returnValue(defer(() => Promise.resolve("question")));
        component.getData();
        expect(spy.get.calls.count()).toBeGreaterThan(0);
    });

    it('should call createflashcard', () => {
        spy.post.and.returnValue(defer(() => Promise.resolve("question")));
        let newflashcard: flashcard = new flashcard(0, "", "");
        component.createflashcard(newflashcard);
        expect(spy.post.calls).toBeTruthy();
    })

    it('should call editflashcard', () => {
        spy.post.and.returnValue(defer(() => Promise.resolve("question")));
        let currentflashcard: flashcard = new flashcard(0, "", "");
        component.editflashcard(currentflashcard);
        expect(spy.post.calls).toBeTruthy();
    })
})