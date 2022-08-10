import { createAction, props } from "@ngrx/store";
import { Note } from "src/models/note.model";

export const addNote = createAction(
  '[Note] Add Note',
  props<{ note: Note }>()
);

export const addNoteSuccess = createAction(
  '[Note] Add Note Success',

);

export const addNoteFail = createAction(
  '[Note] Add Note Fail',
  props<{ error: string }>()
);

export const getNote= createAction(
  '[Note] get Note',
);

export const getNoteSuccess = createAction(
  '[Note] get Note Success',
  props<{ notes: Note[] }>()
);

export const getNoteFail = createAction(
  '[Note] get Note Fail',
  props<{ error: string }>()
);

export const deleteNote= createAction(
  '[Note] delete Note',
  props<{ id: string }>()
);

export const deleteNoteSuccess = createAction(
  '[Note] delete Note Success',
);

export const deleteNoteFail = createAction(
  '[Note] delete Note Fail',
  props<{ error: string }>()
);

//////////update Student
export const updateNote = createAction(
  '[Notes] Update Note',
  props<{note: Note}>()
);
export const updateNoteFail = createAction(
  '[Notes] Update Note Fail',
  props<{ error: string;  }>()
);
export const updateNoteSuccess = createAction(
  '[Notes] Update Note Success',
);
