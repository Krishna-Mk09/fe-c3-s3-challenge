import { Component, Input, OnInit } from '@angular/core';
import {Note} from '../models/note'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input()
  contact?: Note;
  constructor() { }

  ngOnInit(): void {
    
  }

}                           
