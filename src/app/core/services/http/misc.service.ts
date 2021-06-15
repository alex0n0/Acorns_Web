import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class MiscService {

  constructor(private httpClient: HttpClient) { }

  getUsers = ():Observable<any> => {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }

  getCards = ():Observable<any> => {
    return of({
      active: [
        {
          id: uuid()
        }
      ],
      inactive: [
        {
          id: uuid()
        }
      ]
    });
  }
}
