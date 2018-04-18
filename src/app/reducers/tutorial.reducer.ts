import {Action}  from '@ngrx/store'
import {Tutorial} from '../models/tutorial.model'
import * as TutorialActions from '../actions/tutorial.action'

const initialState :Tutorial={
    name:"Angular 5 tutorial",
    author:"Pratap jena",
    description:"Angular 5 with redux",
    url:"http:angular.io.com"
}
export function reducer(state:Tutorial[]=[initialState],action:TutorialActions.Actions){
    console.log(state)
    switch(action.type){
        case TutorialActions.ADD_TUTORIAL:
          return [...state,action.payload]
        case TutorialActions.REMOVE_TUTORIAL:
           state.splice(action.payload,1)
           return state;  
        default:
        return  state;  
    }
}