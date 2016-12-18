import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let roles = [
      { id: 1, name: 'Admin', icon: 'spy', desc: 'Description admin here we go, panjang deskripsinyo, awak caliak baa bantuaknyo kalo yang iko sangaik lah panjang', status: 'green' },
      { id: 2, name: 'User', icon: 'student', desc: 'Description user here', status: 'green' },
    ];
    return {roles};
  }
}
