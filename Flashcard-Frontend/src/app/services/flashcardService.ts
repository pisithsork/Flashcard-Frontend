import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { flashcard } from "../models/flashcard";

@Injectable({
    providedIn: 'root'
})
export class flashcardService {
    private BaseUrl: string = "https://localhost:7041";

    constructor(private http: HttpClient){}

    public getData(): Observable<flashcard[]> {
        return this.http.get<flashcard[]>(this.BaseUrl+"/api/flashcards");
    }

    public createflashcard(newflashcard: flashcard){
        console.log(`ID: ${newflashcard.id}Question: ${newflashcard.question}Answer: ${newflashcard.answer}`);
        return this.http.post<any>(this.BaseUrl+"/api/Flashcards", newflashcard);
    }
}