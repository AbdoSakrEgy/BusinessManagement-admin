import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectGeographyState = createFeatureSelector<{ data: any[] }>('geography');

export const selectGeographyData = createSelector(
  selectGeographyState,
  (state) => state.data
);
