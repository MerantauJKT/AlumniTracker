import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Role } from './role';

@Injectable()
export class RoleService {

  private rolesUrl = 'app/roles';  // URL to web api ROLES
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){}

  getRoles(): Promise<Role[]> {
    return this.http.get(this.rolesUrl)
                    .toPromise()
                    .then(response => response.json().data as Role[])
                    .catch(this.handleError);
  }

  getRole(id: number): Promise<Role> {
    return this.getRoles().then(roles=>roles.find(role => role.id === id));
  }

  update(role: Role): Promise<Role> {
    const url = `${this.rolesUrl}/${role.id}`;
    return this.http
      .put(url, JSON.stringify(role), { headers: this.headers})
      .toPromise()
      .then(() => role)
      .catch(this.handleError);
  }

  create(role: Role): Promise<Role> {
    return this.http
      .post(this.rolesUrl, JSON.stringify(role), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
