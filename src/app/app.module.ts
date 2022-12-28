import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteListComponent } from './pages/note-list/note-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NotecardComponent } from './notecard/notecard.component';
import { NodedetailsComponent } from './pages/nodedetails/nodedetails.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EllipsisModule } from 'ngx-ellipsis';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    MainLayoutComponent,
    NotecardComponent,
    NodedetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000, // 15 seconds
      closeButton: true,
      progressBar: true,
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EllipsisModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
