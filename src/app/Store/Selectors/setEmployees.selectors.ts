import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectEmployeesState = createFeatureSelector<any[]>(
  'setEmployees'
);

export const selectEmployees = createSelector(
  selectEmployeesState,
  (state) => state
);
