import { createReducer, on } from '@ngrx/store';

export const initialState = {
  data: [
    {
      name: 'Taiwan',
      series: [
        {
          value: 2805,
          name: '2016-09-22T08:56:49.847Z',
        },
        {
          value: 6092,
          name: '2016-09-24T03:21:47.405Z',
        },
        {
          value: 5198,
          name: '2016-09-16T04:10:03.634Z',
        },
        {
          value: 4089,
          name: '2016-09-21T10:25:47.508Z',
        },
        {
          value: 6802,
          name: '2016-09-14T07:31:29.757Z',
        },
      ],
    },
    {
      name: 'Greenland',
      series: [
        {
          value: 5816,
          name: '2016-09-22T08:56:49.847Z',
        },
        {
          value: 6207,
          name: '2016-09-24T03:21:47.405Z',
        },
        {
          value: 6463,
          name: '2016-09-16T04:10:03.634Z',
        },
        {
          value: 3089,
          name: '2016-09-21T10:25:47.508Z',
        },
        {
          value: 2671,
          name: '2016-09-14T07:31:29.757Z',
        },
      ],
    },
    {
      name: 'Guam',
      series: [
        {
          value: 5023,
          name: '2016-09-22T08:56:49.847Z',
        },
        {
          value: 2396,
          name: '2016-09-24T03:21:47.405Z',
        },
        {
          value: 5853,
          name: '2016-09-16T04:10:03.634Z',
        },
        {
          value: 5794,
          name: '2016-09-21T10:25:47.508Z',
        },
        {
          value: 6005,
          name: '2016-09-14T07:31:29.757Z',
        },
      ],
    },
    {
      name: 'Hong Kong',
      series: [
        {
          value: 2689,
          name: '2016-09-22T08:56:49.847Z',
        },
        {
          value: 2083,
          name: '2016-09-24T03:21:47.405Z',
        },
        {
          value: 5202,
          name: '2016-09-16T04:10:03.634Z',
        },
        {
          value: 5308,
          name: '2016-09-21T10:25:47.508Z',
        },
        {
          value: 3987,
          name: '2016-09-14T07:31:29.757Z',
        },
      ],
    },
    {
      name: 'New Caledonia',
      series: [
        {
          value: 3442,
          name: '2016-09-22T08:56:49.847Z',
        },
        {
          value: 3986,
          name: '2016-09-24T03:21:47.405Z',
        },
        {
          value: 6611,
          name: '2016-09-16T04:10:03.634Z',
        },
        {
          value: 2662,
          name: '2016-09-21T10:25:47.508Z',
        },
        {
          value: 3739,
          name: '2016-09-14T07:31:29.757Z',
        },
      ],
    },
  ],
};

export const lineReducer = createReducer(initialState);
