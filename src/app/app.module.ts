import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store'
import {reducer} from './reducers/tutorial.reducer'

import { AppComponent } from './app.component';
import {CreateComponent} from './create/create.component'
import {ReadComponent} from './read/read.component'


@NgModule({
  declarations: [
    AppComponent,CreateComponent,ReadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      tutorial:reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
