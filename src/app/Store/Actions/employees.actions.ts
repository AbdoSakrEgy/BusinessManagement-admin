import { createAction, props } from '@ngrx/store';

export const setEmployees = createAction(
  '[Counter] SetEmployees',
  props<{ value: any[] }>()
);
