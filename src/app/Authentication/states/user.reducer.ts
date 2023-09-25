import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import {state} from "@angular/animations";
import {User} from "../model/user";

// Define el estado inicial
export const initialState: User = {
  username: '',
  email: '',
  rol: '',
  isAuthenticated: false,
};

// Define el reducer para las acciones
const userReducer = createReducer(
  initialState,

  on(UserActions.registerUser, (state, { user }) => ({
    ...state,
    username: user.username,
    email: user.email,
    rol: user.rol,
    isAuthenticated: true,
  })),

  on(UserActions.logoutUser, () => initialState),

  on(UserActions.updateRol, (state, { rol }) => ({
    ...state,
    rol: rol, // Actualiza el valor del rol
  }))
);

export function reducer(state: User | undefined, action: any) {
  return userReducer(state, action);
}
