import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../shared/model/user.model';

@Component({
  selector: 'app-heading',
  imports: [],
  templateUrl: './heading.html',
  styleUrl: './heading.css'
})
export class Heading {
  @Input() title = 'Child component text'
  @Input() user! : User 
  
  @Output() success = new EventEmitter<string>();
  
  onClickSubmit(){
    this.success.emit('Message emitted from child to parent')
  }
}
