import { createSelector } from 'reselect';

const selectAdsList = () => state => state.get('adsList');

function selectListElementsCount() {
  return createSelector(
    selectAdsList(),
    listState => listState.get('listElementsCount'),
  );
}

export function selectAds() { // eslint-disable-line import/prefer-default-export
  return createSelector(
    selectAdsList(),
    selectListElementsCount(),
    (listState, count) => listState.get('ads').take(count || 0).toArray(),
  );
}
