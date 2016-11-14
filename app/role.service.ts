import { Injectable } from '@angular/core';

import { Role } from './role';
import { ROLES } from './mock-roles';

@Injectable()
export class RoleService {
  getRoles(): Promise<Role[]> {
    return Promise.resolve(ROLES);
  }
}
