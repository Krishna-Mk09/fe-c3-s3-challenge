import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NOTES } from '../models/notes';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  note:Note={};

  saveNote(){
    if(this.note.title=="" || this.note.content==""){
      alert("please write something in the note")
    }else{
      NOTES.push(this.note);
    }

  }
  
constructor() { }
  ngOnInit(): void {
  }

}
