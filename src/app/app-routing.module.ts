import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NoteEditFormComponent } from './note-edit-form/note-edit-form.component';
import { NoteGalleryComponent } from './note-gallery/note-gallery.component';
import { AddNoteComponent } from './add-note/add-note.component';

const routes: Routes = [
  {path:'', component: NoteGalleryComponent},
  {path:'note/edit', component:NoteEditFormComponent},
  {path:'add/note', component:AddNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
