import { Component } from '@angular/core';
import { SideBar } from '../shared/component/side-bar/side-bar';
//import { SideBarItem } from "../shared/side-bar/side-bar-item/side-bar-item";
//import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { Heading } from "../learning/heading/heading";
import { User } from '../shared/model/user.model';


@Component({
  selector: 'app-root',
  imports: [SideBar, FormsModule, Heading],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected title = 'My Notes App';
  // user = {
  //   name:'Arkhan',
  //   age:27,
  // }
  // count = 0
  // classNames = "p-5 text-xl";
  // onChange($event:Event){
  //   this.user.name = ($event.target as HTMLInputElement).value;
  //   this.count++;
  //}

  heading = 'Parent component text'

  user:User = {
    name: 'Cruise',
    age: 61,
    gender: 'M',
  };

  childMessage = '';
  
  onClickSubmit($event:string){
    this.childMessage = $event
  }
}
