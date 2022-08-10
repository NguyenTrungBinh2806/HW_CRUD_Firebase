import { createReducer, on } from "@ngrx/store";
import { NoteState } from "src/states/note.state";
import * as NoteActions from "src/actions/note.action";
const initialState: NoteState = {
  notes: [],
  error: '',
  isSuccess: true,
  isLoading: false,
};
export const noteReducer = createReducer(
  initialState,
  on(NoteActions.addNote, (state)=>{
    return {...state, isLoading: true};
  }),
  on(NoteActions.addNoteSuccess, (state)=>({
    ...state,
    isLoading: true,
  })),
  on(NoteActions.addNoteFail, (state,{error})=>({
    ...state,
    isLoading: false,
    error: error,
    isSuccess: true,
  })),
  on(NoteActions.getNote, (state)=>({
    ...state,
    isLoading: true,
   error: '',
  })),
  on(NoteActions.getNoteSuccess, (state, {notes})=>({
    ...state,
    isLoading: false,
    error: "",
    notes: notes

  })),
  on(NoteActions.getNoteFail, (state,{error})=>({
    ...state,
    isLoading: false,
    error: error,
    // isSuccess: true,
  })),
  on(NoteActions.deleteNote, (state)=>({
    ...state,
    isLoading: true,
    error: '',
  })),
  on(NoteActions.deleteNoteSuccess, (state)=>({
    ...state,
    isLoading: true,
    error: "",

  })),
  on(NoteActions.deleteNoteFail, (state,{error})=>({
    ...state,
    isLoading: false,
    error: error,
    // isSuccess: true,
  })),

  on(NoteActions.updateNote, (state) => {
    return { ...state, isLoading: true };
  }),
  on(NoteActions.updateNoteSuccess, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(NoteActions.updateNoteFail, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
    isSuccess: true,
  })),
);
