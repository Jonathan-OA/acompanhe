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
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}


@Injectable()
export class AuthServiceProvider {

  currentUser: User;
  data: Observable<any>;

  constructor(public http: HttpClient){

  }
 
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      
      return Observable.create(observer => {
        
        var url = "http://www.acompanhe-jonathan-oa.c9users.io/WebService/login/"+credentials.email+"/"+credentials.password;
       // let postData = new FormData();
        //postData.append('key', 'value');
        this.data = this.http.get(url);
        this.data
        .subscribe(datat => {
          if(datat.nome != 0){
            observer.next(1);
          }else{
            observer.next(0);
          }
        })
        
        this.currentUser = new User('Simon', 'saimon@devdactic.com');
        
        observer.complete();
      });
    }
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }


}
