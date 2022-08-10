import { Note } from './../../models/note.model';
import { Injectable } from '@angular/core';
import { collection, collectionSnapshots, deleteDoc, Firestore } from '@angular/fire/firestore';
import { doc, setDoc } from '@firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private db: Firestore) { }

  addNote(note: Note) {
    if (!note.id) {
      throw new Error('Notes is required');
    }
    return setDoc(doc(this.db, 'notes/' + note.id), note);
  }
  getNote(){
    return collectionSnapshots(collection(this.db, 'notes'));
  }
  // getAll(){
  //   return collectionSnapshots(collection(this.db, 'students'));
  // }
  // update(student: Student){
  //   return setDoc(doc(this.db, 'students/' + student.id), student);
  // }
  deleteNote(noteId: String){
    return deleteDoc(doc(this.db, 'notes/' + noteId));
  }
  updateNote(note: Note) {
    return setDoc(doc(this.db, 'notes/' + note.id), note);
  }
}
