export class User {
  "username": string;
  "email": string;
  "rol":string;
  "isAuthenticated": boolean;

  constructor() {
    this.username = '';
    this.email = '';
    this.rol = '';
    this.isAuthenticated = false;
  }

}
