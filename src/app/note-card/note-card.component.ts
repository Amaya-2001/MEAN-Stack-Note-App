import { Component } from '@angular/core';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css'
})
export class NoteCardComponent {
  faEdit = faEdit;
  faTrash = faTrash;
}
