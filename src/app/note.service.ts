import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl:string = "http://localhost:8000";

  constructor(private http:HttpClient) { }

  saveNote(noteObj: any) {
    return this.http.post<any>(`${this.apiUrl}/create/note`, noteObj)
  }

  getNote(noteId:string) {
    return this.http.get<any>(`${this.apiUrl}get/note`)
  }

  getAllNotes() {
    return this.http.get<any>(`${this.apiUrl}get/notes`)
  }

  editNote(noteId:string, noteObj:any) {
    return this.http.put<any>(`${this.apiUrl}update/note`, noteObj)
  }

  deleteNote(noteId:string) {
    return this.http.get<any>(`${this.apiUrl}delete/note`)
  }
}
