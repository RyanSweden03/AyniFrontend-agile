import { createAction, props } from '@ngrx/store';
import {User} from "../model/user";

export const registerUser = createAction(
  '[User] Register User',
  props<{ user: User }>()
);

export const logoutUser = createAction(
  '[User] Logout User'
);

export const updateRol = createAction(
  '[Rol] Update Rol',
  props<{ rol: string }>()
);
