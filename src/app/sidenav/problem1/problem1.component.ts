import { Component, OnInit } from '@angular/core';
import { PROBLEMS } from '../../problems';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-problem2',
  templateUrl: './problem1.component.html',
  styleUrls: ['./problem1.component.scss']
})
export class Problem1Component implements OnInit {

  problems = PROBLEMS;

  constructor(public snackBar: MatSnackBar) {
  }
  ngOnInit() {
  }

  receiveMessage($event) {
    if ($event === this.problems[0].solution) {
      console.log('CORRECT');
      this.openSnackBar('Correct! CLUE: ' + this.problems[0].clue, 'Ok');
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
