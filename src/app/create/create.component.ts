import { Component, OnInit } from '@angular/core';
import {Observable}  from 'rxjs/Observable'
import {Store}  from '@ngrx/store';
import {Tutorial} from '../models/tutorial.model';
import {AppState} from '../app.state';
import * as tutorialsActions from '../actions/tutorial.action'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
   tutorial={name:"",author:"",description:"",url:""};
   
   tutorials:Observable<Tutorial[]>;
   constructor(private store:Store<AppState>) {
  
     this.tutorials=store.select('tutorial')
    // console.log("create=")
    }
  add(){
    console.log(this.tutorial)
    this.store.dispatch(new tutorialsActions.AddTutorial({name:this.tutorial.name,author:this.tutorial.author,description:this.tutorial.description,url:this.tutorial.url}))
    this.tutorial={name:"",author:"",description:"",url:""};
  }
  ngOnInit() {
  }

}
