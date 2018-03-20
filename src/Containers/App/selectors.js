import { createSelector } from 'reselect';

const selectGlobal = () => state => state.get('global');

export function selectShowLoader() {
  return createSelector(
    selectGlobal(),
    globalState => globalState.get('showLoader'),
  );
}

export function selectErrorMessage() {
  return createSelector(
    selectGlobal(),
    globalState => globalState.get('errorMessage'),
  );
}
