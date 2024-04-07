import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-gallery',
  templateUrl: './note-gallery.component.html',
  styleUrl: './note-gallery.component.css'
})
export class NoteGalleryComponent implements OnInit {

  notes:any[] = [];
  ngOnInit(): void {
    this.getAllNotes();
  }

  constructor(private service:NoteService, private router:Router) {}

  getAllNotes() {
    this.service.getAllNotes().subscribe((notes) =>{
      console.log(notes)
      this.notes = notes;
    })
  }

}
