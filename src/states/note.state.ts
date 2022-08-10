import { Note } from "src/models/note.model";

export interface NoteState{
  notes: Note[];
  error: string;
  isSuccess: boolean;
  isLoading: boolean;
}
