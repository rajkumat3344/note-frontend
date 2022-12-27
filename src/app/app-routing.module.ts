import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NodedetailsComponent } from './pages/nodedetails/nodedetails.component';
import { NoteListComponent } from './pages/note-list/note-list.component';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children:[{
    path: '', component:NoteListComponent
  },{
    path: `:id`, component: NodedetailsComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
