import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectLineState = createFeatureSelector<{ data: any[] }>('line');

export const selectLineData = createSelector(
  selectLineState,
  (state) => state.data
);
