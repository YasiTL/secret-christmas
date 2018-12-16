import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-submit-field',
  templateUrl: './submit-field.component.html',
  styleUrls: ['./submit-field.component.scss']
})
export class SubmitFieldComponent implements OnInit {

  answer: string;

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(answer) {
    this.messageEvent.emit(answer);
  }

}
