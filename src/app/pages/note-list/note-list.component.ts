import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NoteService } from 'src/app/shared/note.service';
import { NoteModule } from 'src/app/shared/note/note.module';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
  animations: [
    trigger('itemAnim', [
      //Entry Animation
      transition('void => *', [
        //Initial state
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,

          //we have to expand out the padding properties
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0
        }),
        animate('200ms', style({
          height: '*',
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingRight: '*',
          paddingLeft: '*'

        })),
        animate(68)
      ]),
      transition('* => void', [
        animate(70, style({
          transform: 'scale(1.05)'
        })),

        animate(70, style({
          transform: 'scale(1)',
          opacity: 0.75
        })),
        animate('150ms ease-out', style({
          transform: 'scale(0.68)',
          opacity: 0
        })),
        animate('200ms ease-out', style({
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
          'margin-bottom': '0'
        }))
      ])
    ]),
    trigger('listAnim',[
      transition('* => *', [
        query(':enter', [style({
          opacity: 0,
          height: 0
        }),
        stagger(300, [
          animate('0.2s ease')
        ])], {optional: true})
      ])
    ])
  ],
})
export class NoteListComponent implements OnInit{
  notes: NoteModule[] = new Array<NoteModule>();
  // filteredNotes: NoteModule[] = new Array<NoteModule>();

  // @ViewChild('filterInput') filterInputElRef!: ElementRef<HTMLInputElement> | null;
  searchText = '';
constructor(private noteService: NoteService) {}
  ngOnInit(): void {
      //Retrieve all notes from noteService
      this.notes = this.noteService.getAll();
      // this.filteredNotes = this.notes;
  }

  deletNote(note: NoteModule){
    let noteId = this.noteService.getId(note);
    this.noteService.delete(noteId);
  }

  // deletNote(note: NoteModule){
  //   let noteId = this.noteService.getId(note);
  //   this.noteService.delete(noteId);
  //   this.notes.filter(this.filterInputElRef?.nativeElement.value);
  // }

  // filter(query: string){
  //   query = query.toLowerCase().trim();

  //   let allRes: NoteModule[] = new Array<NoteModule>();
  //   //split up the search query into individual word.
  //   let terms: string[] = query.split('');

  //   //remove duplicate search terms
  //   terms = this.removeDup(terms);

  //   //compile all relevant results into the allresults
  //   terms.forEach(word => {
  //     let results: NoteModule[] = this.relevantNotes(word);
  //     // append the results to all results
  //     allRes = [...allRes, ...results]
  //   })

  //   let uniqueResults = this.removeDup(allRes);
  //   this.filteredNotes = uniqueResults;
  // }

  // removeDup(arr: Array<any>): Array<any>{
  //   let uniqueRes: Set<any> = new Set<any>();

  //   //looping the set and inputing the  value
  //   arr.forEach(e => uniqueRes.add(e));

  //   return Array.from(uniqueRes);
  // }

  // relevantNotes(query: string): Array<NoteModule>{
  //   query = query.toString().toLowerCase().trim();

  //   let relevantNotes = this.notes.filter(note => {
  //     if(note.title && note.title.toLowerCase().includes(query)){
  //       return true;
  //     }
  //     if(note.body && note.body.toLowerCase().includes(query)){
  //       return true;
  //     }
  //     return false;
  //   })

  //   return relevantNotes;
  // }

}
