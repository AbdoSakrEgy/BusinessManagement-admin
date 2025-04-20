import { createReducer, on } from '@ngrx/store';

export const initialState = {
  data: [
    {
      name: 'Male',
      value: 70,
    },
    {
      name: 'Female',
      value: 40,
    },
  ],
};

export const lineReducer = createReducer(initialState);
