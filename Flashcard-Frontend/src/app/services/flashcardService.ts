import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { flashcard } from "../models/flashcard";
import { environment } from "../../environment/environment.prod";

@Injectable({
    providedIn: 'root'
})
export class flashcardService {
    private BaseUrl: string = `${environment.baseUrl}`;

    constructor(private http: HttpClient){}

    public getData(): Observable<flashcard[]> {
        return this.http.get<flashcard[]>(this.BaseUrl+"/api/flashcards");
    }

    public createflashcard(newflashcard: flashcard){
        console.log(`ID: ${newflashcard.id}Question: ${newflashcard.question}Answer: ${newflashcard.answer}`);
        let value: any = this.http.post<any>(this.BaseUrl+"/api/Flashcards", newflashcard);
        console.log(value);
        return this.http.post<any>(this.BaseUrl+"/api/Flashcards", newflashcard);
    }

    public editflashcard(editflashcard: flashcard){
        console.log(`ID: ${editflashcard.id}Question: ${editflashcard.question}Answer: ${editflashcard.answer}`);
        let value: any = this.http.put<any>(this.BaseUrl+`/api/Flashcards/${editflashcard.id}`, editflashcard);
        console.log(value);
        return this.http.put<any>(this.BaseUrl+`/api/Flashcards/${editflashcard.id}`, editflashcard);
    }
}