import { Component, OnInit } from '@angular/core';
import {PROBLEMS} from '../../problems';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-problem4',
  templateUrl: './problem4.component.html',
  styleUrls: ['./problem4.component.scss']
})
export class Problem4Component implements OnInit {

  problems = PROBLEMS;

  constructor(public snackBar: MatSnackBar) {
  }
  ngOnInit() {
  }

  receiveMessage($event) {
    if ($event === this.problems[3].solution) {
      console.log('CORRECT');
      this.openSnackBar('Correct! CLUE: ' + this.problems[3].clue, 'Ok');
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
