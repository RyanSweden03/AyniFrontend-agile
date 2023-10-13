export class User {

  "id" : number;
  "username": string;
  "email": string;
  "password": string;
  "rol":string;
  "photo": string;
  "isAuthenticated": boolean;

  constructor() {
    this.id = 0;
    this.username = '';
    this.password = '';
    this.email = '';
    this.rol = '';
    this.photo = '';
    this.isAuthenticated = false;
  }

}

