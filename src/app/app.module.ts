import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteGalleryComponent } from './note-gallery/note-gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoteCardComponent } from './note-card/note-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoteEditFormComponent } from './note-edit-form/note-edit-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AddNoteComponent } from './add-note/add-note.component';
import { NgToastModule } from 'ng-angular-popup';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NoteGalleryComponent,
    NavbarComponent,
    NoteCardComponent,
    NoteEditFormComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgToastModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
