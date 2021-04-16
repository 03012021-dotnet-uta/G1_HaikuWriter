import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User} from "../models/user.model"


@Injectable({
  providedIn: 'root'
})
export class UserService {

<<<<<<< HEAD
  queryString: string = 'https://haikuwritergroup.azurewebsites.net/User/';
  //queryString: string = 'https://localhost:5001/User/';
=======
  queryString: string = 'https://haikuwritergroupproject.azurewebsites.net/User/';

>>>>>>> f1f1750a9ec8abde28d06531b02b00095404ef9f
  constructor(private http: HttpClient) { }

  signup(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(`${this.queryString}signup/`, user);
  }

  updateUser(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(`${this.queryString}updateuser/`, user);
  }

  updatePassword(username: string, pw: string, npw: string): Observable<User> {

    return this.http.get<User>(`${this.queryString}updatePassword/${username}/${pw}/${npw}` );
  }

  login(username: string, password: string): Observable<User> {
    console.log(username);
    if(username == null){
      return null as any;
    }
    console.log("here")
    return this.http.get<User>(`${this.queryString}login/${username}/${password}`);
  }

  getUserByUserName(username: string | null): Observable<User>{
    console.log(username)
    return this.http.get<User>(`${this.queryString}getuserbyusername/${username}`);
  }

  getAllUser(): Observable<User[]>{
    return this.http.get<User[]>(`${this.queryString}getAllUser/`);
  }


  // signup(user: User): Observable<User> {
  //   console.log(user);
  //   return this.http.get<User>(`${this.queryString}`);
  // }
}
