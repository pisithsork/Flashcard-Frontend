import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashcardCreateComponent } from './components/flashcard-create/flashcard-create.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {path: "", redirectTo: "/homepage", pathMatch: "full"},
  {path: "homepage", component: HomepageComponent},
  {path: "addflashcard", component: FlashcardCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
