import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { NoteState } from 'src/states/note.state';
import * as NoteActions from 'src/actions/note.action';
import { Note } from 'src/models/note.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  noteState$ = this.store.select('note');
  notes$ =  this.store.select((state)=>state.note.notes);

  today: Date = new Date();
  pipe = new DatePipe('en-US');

   datetime = this.pipe.transform(Date.now(), 'dd/MM/yyyy');

  currentNote: Note={
    id: Date.now().toString(),
    title: '',
    date: '',
    text: '',
  }
  oldNote: Note={
    id: '',
    title: '',
    date: '',
    text: '',
  }
  constructor(private store: Store<{ note: NoteState }>) {}
  NoteState = {
    error:'',
    isLoading: true,
    isSuccess: false,
    notes:[]
  }
  ngOnInit(): void {
    this.noteState$.subscribe(state =>{
      console.log(state);
    });
    this.store.dispatch(NoteActions.getNote());
  }
  addNewNote(){
    this.store.dispatch(NoteActions.addNote({note: this.currentNote}));
    alert("ghi chú mã " + this.currentNote.id + " đã được thêm");

  }
  deleteANote(id: string): void{
    this.store.dispatch(NoteActions.deleteNote({id}));
    alert("ghi chú mã " + this.currentNote.id + " đã được xóa");
    // window.location.reload();
  }
  // updateNote(){
  //    this.store.dispatch(NoteActions.updateNote({note: this.oldNote}));
  //   //  window.location.reload();
  //  }


}
