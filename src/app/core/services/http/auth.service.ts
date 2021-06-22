import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockRepositoryService } from '../data/mockRepository.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private repo: MockRepositoryService) { }

  getUserDetails = () => {
    return of(this.repo.getData().getUserDetails());
  }

  getOrgDetails = ():Observable<any> => {
    return of(this.repo.getData().getOrgDetails());
  }

}
