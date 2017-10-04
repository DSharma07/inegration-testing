import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { VoterComponent } from './voter/voter.component';
import { TodosComponent } from './todos/todos.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NavComponent } from './nav/nav.component';
import { HighlightDirective } from './highlight.directive'; 

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    TodosComponent,
    UserDetailsComponent,
    HomeComponent,
    UsersComponent,
    NavComponent,
    HighlightDirective
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
