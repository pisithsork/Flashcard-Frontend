import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { flashcard } from '../../models/flashcard';
import { flashcardService } from '../../services/flashcardService';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  flashcards: flashcard[] = [];

  constructor(private flashcardService: flashcardService, private router: Router) { }

  ngOnInit(): void {
    this.flashcardService.getData().subscribe(
      (resp) => this.flashcards = resp,
      (err) => console.log(err),
      () => console.log("Data Received")
    );
  }

  addFlashcard(): void{
    this.router.navigateByUrl('/addflashcard')
  }

}
