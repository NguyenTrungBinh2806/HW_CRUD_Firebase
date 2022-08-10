import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NoteState } from 'src/states/note.state';
import * as NoteActions from 'src/actions/note.action';
import { Note } from 'src/models/note.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  noteState$ = this.store.select('note');
  notes$ =  this.store.select((state)=>state.note.notes);
  currentNote: Note={
    id: Date.now().toString(),
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
    // this.noteState$.subscribe(state =>{
    //   // this.res = state
    //   console.log(state);
    // });
    // this.store.dispatch(NoteActions.getNote());
    // this.store.dispatch(
    //   NoteActions.addNote({
    //     note: {
    //       id: '3',
    //       title: 'Note 1',
    //       date: '8/8/2022',
    //       text: 'Nguyễn Văn A',
    //     },
    //   })
    // );
  }
  // addNewNote(){
  //   this.store.dispatch(NoteActions.addNote({note: this.currentNote}));
  //   alert("ghi chú mã " + this.currentNote.id + " đã được thêm");

  // }
}
