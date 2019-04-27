import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  url: any = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  

  createNewUser(userData) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'crossDomain': 'true'
      })
    };

      return this.http.post(this.url + 'users/create', userData, httpOptions);
  }

  allUsers() {
   return this.http.get(this.url + 'users/all');   
  }

  deleteUser(userID){
    return this.http.get(this.url + 'users/delete/' + userID); 
  }

  editUser(userData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'crossDomain': 'true'
      })
    };
    console.log(userData);

      return this.http.post(this.url + 'users/edit', userData, httpOptions);
   
  }

  createUserComment(comment) {
    const httpOptions = {
      headers: new HttpHeaders({
        //'Content-Type':  'application/json',
        'crossDomain': 'true'
      })
    };
    

      return this.http.post(this.url + 'users/add/comment', comment, httpOptions);
  }

  //workers api
  allWorkers() {
    return this.http.get(this.url + 'workers/all');   
   }


createNewWorker (workerData){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'crossDomain': 'true'
    })
  };

    return this.http.post(this.url + 'workers/create', workerData, httpOptions);
}

deleteWorker(workerID){
  return this.http.get(this.url + 'workers/delete/' + workerID); 
}

allCategories(){
  return this.http.get(this.url + 'workers/allcates');  
}

}