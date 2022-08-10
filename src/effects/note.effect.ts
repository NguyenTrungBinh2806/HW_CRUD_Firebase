import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { NoteService } from "src/app/services/note.service";
import * as NoteActions from "src/actions/note.action";
import { from, switchMap, map, catchError, of } from "rxjs";
import { Note } from "src/models/note.model";
@Injectable()
export class NoteEffects {
  constructor(
    private actions$: Actions,
    private noteService: NoteService
  ) {}
  addNote$ = createEffect(()=> this.actions$.pipe(
    ofType(NoteActions.addNote),
    switchMap((action) => from(this.noteService.addNote(action.note))),
    map(()=>NoteActions.addNoteSuccess()),
    catchError((error)=> {
      return of(NoteActions.addNoteFail({error: error }));
    })
    ));
    getNotes$ = createEffect(() => this.actions$.pipe(
      ofType(NoteActions.getNote),
      switchMap(() => from(this.noteService.getNote())),
      map((snapshot) =>{
        let notes = snapshot.map((doc)=> <Note>doc.data());
        return NoteActions.getNoteSuccess({notes: notes})
      }),
        catchError((error)=>{
          return of(NoteActions.getNoteFail({error: error}))
        })
    ));
    deleteNotes$ = createEffect(()=> this.actions$.pipe(
      ofType(NoteActions.deleteNote),
      switchMap(action => from(this.noteService.deleteNote(action.id)).pipe(
        map(() => NoteActions.deleteNoteSuccess()),
        catchError((error) => of(NoteActions.deleteNoteFail(error.message)))
    ))));

    updateNote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoteActions.updateNote),
      switchMap((action) => from(this.noteService.updateNote(action.note))),
      map(() => NoteActions.updateNoteSuccess()),
      catchError((error) => {
        return of(NoteActions.updateNoteFail({ error: error }));
      })
    )
  );
}
