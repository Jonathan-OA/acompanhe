import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class User {
  name: string;
  email: string;
  id: number;

  constructor(name: string, email: string, id: number) {
    this.name = name;
    this.email = email;
    this.id = id;
  }
}


@Injectable()
export class AuthServiceProvider {

  public currentUser: User;

  constructor(public http: HttpClient){

  }
 
  public setUser($nome, $email, $id){
    this.currentUser = new User($nome, $email, $id);
  }
      
  public getUser() : User {
    return this.currentUser;
  }
 


}
