import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/shared/note.service';
import { NoteModule } from 'src/app/shared/note/note.module';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit{
  notes: NoteModule[] = new Array<NoteModule>();

constructor(private noteService: NoteService) {}
  ngOnInit(): void {
      //Retrieve all notes from noteService
      this.notes = this.noteService.getAll();
  }


}
