import { fromJS, List } from 'immutable';

import { LOAD_ADS_LIST_SUCCESS } from '../App/constants';
import { LOAD_NEXT } from './constants';

const initialState = fromJS({
  ads: [],
  listElementsCount: 10,
});

export default function (state = initialState, action) {
  const newCounter = state.get('listElementsCount') + action.data;

  switch (action.type) {
    case LOAD_ADS_LIST_SUCCESS:
      return state.set('ads', List(action.data));
    case LOAD_NEXT:
      return state.set('listElementsCount', newCounter);
    default:
      return state;
  }
}
