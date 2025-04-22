import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { barReducer } from './bar.reducer';
import { geographyReducer } from './geography.reducer';
import { lineReducer } from './line.reducer';
import { pieReducer } from './pie.reducer';
import { setEmployeesReducer } from './employees.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  bar: barReducer,
  geography: geographyReducer,
  line: lineReducer,
  pie: pieReducer,
  setEmployees: setEmployeesReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
