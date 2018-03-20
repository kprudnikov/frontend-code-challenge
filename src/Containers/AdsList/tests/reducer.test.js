import { fromJS } from 'immutable';

import { loadNext } from '../actions';
import { loadAdsListSuccess } from '../../App/actions';
import reducer from '../reducer';

const initialState = {
  ads: [],
  listElementsCount: 10,
};

const initialStateMap = fromJS(initialState);

describe('AdsList reducer', () => {
  it('SET_LOADER', () => {
    const count = 10;
    const action = loadNext(count);
    expect(reducer(initialStateMap, action)).toEqual(fromJS({
      ...initialState,
      listElementsCount: initialState.listElementsCount + count,
    }));
  });

  it('LOAD_ADS_LIST_SUCCESS', () => {
    const list = ['test ad'];

    const action = loadAdsListSuccess(list);
    expect(reducer(initialStateMap, action)).toEqual(fromJS({
      ...initialState,
      ads: list,
    }));
  });
});
