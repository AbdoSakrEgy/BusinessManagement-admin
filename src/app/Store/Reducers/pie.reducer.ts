import { createReducer, on } from '@ngrx/store';

export const initialState = {
  data: [
    {
      name: 'Germany',
      value: 40632,
      extra: {
        code: 'de',
      },
    },
    {
      name: 'United States',
      value: 50000,
      extra: {
        code: 'us',
      },
    },
    {
      name: 'France',
      value: 36745,
      extra: {
        code: 'fr',
      },
    },
    {
      name: 'United Kingdom',
      value: 36240,
      extra: {
        code: 'uk',
      },
    },
    {
      name: 'Spain',
      value: 33000,
      extra: {
        code: 'es',
      },
    },
    {
      name: 'Italy',
      value: 35800,
      extra: {
        code: 'it',
      },
    },
  ],
};

export const pieReducer = createReducer(initialState);
