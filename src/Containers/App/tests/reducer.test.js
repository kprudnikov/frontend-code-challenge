import { fromJS } from 'immutable';

import {
  setLoader,
  setErrorMessage,
} from '../actions';

import reducer from '../reducer';

const initialState = {
  errorMessage: '',
  showLoader: true,
};

const initialStateMap = fromJS(initialState);

describe('App reducer', () => {
  it('SET_LOADER', () => {
    const action = setLoader(true);
    expect(reducer(initialStateMap, action)).toEqual(fromJS({
      ...initialState,
      showLoader: true,
    }));
  });

  it('SET_ERROR_MESSAGE', () => {
    const message = 'test message';
    const action = setErrorMessage(message);
    expect(reducer(initialStateMap, action)).toEqual(fromJS({
      ...initialState,
      errorMessage: message,
    }));
  });
});
