import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectPieState = createFeatureSelector<{ data: any[] }>('pie');

export const selectPieData = createSelector(
  selectPieState,
  (state) => state.data
);
