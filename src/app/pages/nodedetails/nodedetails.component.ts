import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/shared/note.service';
import { NoteModule } from 'src/app/shared/note/note.module';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nodedetails',
  templateUrl: './nodedetails.component.html',
  styleUrls: ['./nodedetails.component.scss']
})
export class NodedetailsComponent implements OnInit{
  note!: NoteModule;
  isModalActive: boolean = false;
  
   


  constructor(private noteService: NoteService, private router: Router, private tService: ToastrService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void{
   this.note = new NoteModule();
   this.cdRef.detectChanges(); 
  }

  public showSuccess(): void {
    this.tService.success('Successfully Added!', 'Note');
    
  }

 onSubmit(form: NgForm){
    this.noteService.add(form.value);
      this.router.navigateByUrl('/');
      this.isModalActive = false;
       form.reset();
       console.log(form.value);
  }
  
  toggleModal(){
    this.isModalActive = !this.isModalActive;
    
  }

  
}
