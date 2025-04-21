import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectGeographyState = createFeatureSelector<{
  data: any[];
  topology: any;
}>('geography');

export const selectGeographyData = createSelector(
  selectGeographyState,
  (state) => state.data
);
export const selectGeographyTopology = createSelector(
  selectGeographyState,
  (state) => state.topology
);
