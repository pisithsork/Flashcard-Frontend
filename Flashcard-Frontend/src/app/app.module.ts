import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FlashcardDisplayComponent } from './components/flashcard-display/flashcard-display.component';
import { FlashcardCreateComponent } from './components/flashcard-create/flashcard-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FlashcardDisplayComponent,
    FlashcardCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
