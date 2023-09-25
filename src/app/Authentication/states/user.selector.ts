import { createFeatureSelector, createSelector } from '@ngrx/store';
import {User} from "../model/user";

export const selectUserState = createFeatureSelector<User>('user');

// Crea un selector para obtener el usuario
export const selectUser = createSelector(
  selectUserState,
  (state: User) => state
);

// Crea un selector para verificar si el usuario está autenticado
export const selectIsAuthenticated = createSelector(
  selectUser,
  (user: User) => user.isAuthenticated
);

export const selectRol = createSelector(
  selectUser,
  (user: User) => user.rol
);
