import { Component, OnInit } from '@angular/core';
import {Observable}  from 'rxjs/Observable'
import {Store}  from '@ngrx/store';
import {Tutorial} from '../models/tutorial.model';
import {AppState} from '../app.state';

import * as tutorialsActions from '../actions/tutorial.action'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  tutorials:Observable<Tutorial[]>;
  constructor(private store:Store<AppState>) {
    this.tutorials=store.select('tutorial');
   }
  ngOnInit() {
  }
  deleteTutorial(index){
    this.store.dispatch(new tutorialsActions.RemoveTutorial(index));
  }
}
