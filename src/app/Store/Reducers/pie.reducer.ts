import { createReducer, on } from '@ngrx/store';

export const initialState = {
  data: [
    {
      name: 'Germany',
      series: [
        {
          name: '1990',
          value: 120000001,
        },
        {
          name: '2010',
          value: 530000000,
        },
        {
          name: '2011',
          value: 265214590,
        },
        {
          name: '2014',
          value: 982315640,
        },
        {
          name: '2015',
          value: 123984650,
        },
      ],
    },

    {
      name: 'USA',
      series: [
        {
          name: '1990',
          value: 350000000,
        },
        {
          name: '2010',
          value: 909000000,
        },
        {
          name: '2011',
          value: 111000000,
        },
        {
          name: '2014',
          value: 211000000,
        },
        {
          name: '2015',
          value: 911000000,
        },
      ],
    },

    {
      name: 'France',
      series: [
        {
          name: '1990',
          value: 980000001,
        },
        {
          name: '2010',
          value: 100000202,
        },
        {
          name: '2011',
          value: 980000003,
        },
        {
          name: '2014',
          value: 580000004,
        },
        {
          name: '2015',
          value: 280000005,
        },
      ],
    },
  ],
};

export const pieReducer = createReducer(initialState);
