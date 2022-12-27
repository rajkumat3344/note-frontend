import { Injectable } from '@angular/core';
import { NoteModule } from './note/note.module';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: NoteModule[] = new Array<NoteModule>();
  constructor() { }

  getAll(){
    return this.notes;
  }

  get(id: number){
    return this.notes[id];
  }

  getId(note: NoteModule){
    return this.notes.indexOf(note);
  }

  add(note: NoteModule){
    let newLength = this.notes.push(note);
    let index = newLength - 1;

    return index;
  }

  update(id: number, title: string, body: string){
    let note = this.notes[id];
    note.title = title;
    note.body = body;
  }

  delete(id: number){
    this.notes.splice(id, 1);
  }
}
