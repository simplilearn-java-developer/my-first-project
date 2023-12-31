import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  message: string = "";

  @Output()
  childMessage = new EventEmitter<string>

  onClick(): void {
    this.childMessage.emit("Message from the Child")
  }
}
