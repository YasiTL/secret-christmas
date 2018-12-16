import { Component, OnInit } from '@angular/core';
import {PROBLEMS} from '../../problems';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-problem3',
  templateUrl: './problem3.component.html',
  styleUrls: ['./problem3.component.scss']
})
export class Problem3Component implements OnInit {

  problems = PROBLEMS;

  constructor(public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  receiveMessage($event) {
    if ($event === this.problems[2].solution) {
      console.log('CORRECT');
      this.openSnackBar('Correct! CLUE: ' + this.problems[2].clue, 'Ok');
    } else {
      this.openSnackBar('Please try again.', 'Ok');
    }
    console.log($event);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
    });
  }

}
