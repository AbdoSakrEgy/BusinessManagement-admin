import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectBarState = createFeatureSelector<{ data: any[] }>('bar');

export const selectBarData = createSelector(
  selectBarState,
  (state) => state.data
);
