import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent implements OnInit {
public addNoteForm!: FormGroup;
constructor(private fb: FormBuilder, private service:NoteService, private router:Router, private toast:NgToastService) {  
}
  ngOnInit(): void {
    this.addNoteForm = this.fb.group({
      title: ['',Validators.required],
      description: ['',Validators.required]
    })
    
  }

  onSave(){
    this.service.saveNote(this.addNoteForm.value).subscribe({
      next:(res =>{
      this.toast.success({detail:'Note save successfully!', summary:"Added to your note gallery.", duration:5000});
      this.addNoteForm.reset();
      this.router.navigate(['']);
      }),
      error: (err => {
        this.toast.error({ detail: "Error occured while saving!", summary: err.message, duration: 5000 })
      })
    })
  }
}
