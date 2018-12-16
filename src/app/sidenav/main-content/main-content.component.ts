import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  // problem1active = false;
  // problem2active = false;
  // problem3active: boolean;
  // problem4active: boolean;
  // problem5active: boolean;
  // problem6active: boolean;

  @Output() problem1Event = new EventEmitter<boolean>();
  @Output() problem2Event = new EventEmitter<boolean>();
  @Output() problem3Event = new EventEmitter<boolean>();
  @Output() problem4Event = new EventEmitter<boolean>();
  @Output() problem5Event = new EventEmitter<boolean>();
  @Output() problem6Event = new EventEmitter<boolean>();

  @Output() loginEvent = new EventEmitter<boolean>();

  constructor() { }
  ngOnInit() {
  }
  // onSubmit(answerInput: string) {
  //   console.log(this.persons);
  //   for (const i of this.persons) {
  //     if (answerInput === i.user) {
  //       console.log(i.problem2);
  //       // this.loginEvent.emit(false);
  //       this.problem1Event.emit(i.problem1);
  //       // this.problem2Event.emit(i.problem2);
  //       // this.problem3Event.emit(i.problem3);
  //       // this.problem4Event.emit(i.problem4);
  //       // this.problem5Event.emit(i.problem5);
  //       // this.problem6Event.emit(i.problem6);
  //
  //
  //     }
  //   }
  // }

}
