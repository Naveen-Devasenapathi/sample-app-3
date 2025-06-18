import { Component, Input, Output, EventEmitter, OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { User } from '../../shared/model/user.model';

@Component({
  selector: 'app-heading',
  imports: [],
  templateUrl: './heading.html',
  styleUrl: './heading.css'
})
export class Heading implements OnChanges, OnInit {

  @Input() name='';

  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log('OnChanges called')
  }
  ngOnInit(){
    console.log('OnInit(){} initiated')
  }
  // ngDoCheck(): void {
  //   throw new Error('Method not implemented.');
  // } 
  // ngAfterContentInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngAfterContentChecked(): void {
  //   throw new Error('Method not implemented.');
  // } 
  // ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngAfterViewChecked(): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }


  // @Input() title = 'Child component text'
  // @Input() user! : User 
  
  // @Output() success = new EventEmitter<string>();
  
  // onClickSubmit(){
  //   this.success.emit('Message emitted from child to parent')
  // }


}
