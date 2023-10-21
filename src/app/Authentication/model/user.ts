export class User {
  "id": number;
  "username": string;
  "email": string;
  "rol":string;
  "isAuthenticated": boolean;

  constructor() {
    this.id = 0;
    this.username = '';
    this.email = '';
    this.rol = '';
    this.isAuthenticated = false;
  }

}
