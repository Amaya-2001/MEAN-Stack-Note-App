import { Component, Input } from '@angular/core';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css'
})
export class NoteCardComponent {
  @Input() title:string = '';
  @Input() description:string = '';
  faEdit = faEdit;
  faTrash = faTrash;
}
