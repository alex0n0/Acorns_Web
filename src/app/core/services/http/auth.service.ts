import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RepositoryService } from '../data/repository.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private repositoryService: RepositoryService) { }

  getOrgDetails = ():Observable<any> => {
    return of(this.repositoryService.getData().getOrgDetails());
  }
}
