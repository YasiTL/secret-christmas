import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-submit-field',
  templateUrl: './submit-field.component.html',
  styleUrls: ['./submit-field.component.scss']
})
export class SubmitFieldComponent implements OnInit {

  inputCtrl = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.inputCtrl.value);
  }

}