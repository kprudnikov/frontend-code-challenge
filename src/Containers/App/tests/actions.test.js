import {
  SET_LOADER,
  LOAD_ADS_LIST_SEND,
  LOAD_ADS_LIST_SUCCESS,
  SET_ERROR_MESSAGE,
} from '../constants';

import {
  setLoader,
  setErrorMessage,
  loadAdsListSend,
  loadAdsListSuccess,
} from '../actions';

describe('App actions', () => {
  it('setLoader', () => {
    const expectedResult = {
      type: SET_LOADER,
      showLoader: true,
    };

    expect(setLoader(true)).toEqual(expectedResult);
  });

  it('setErrorMessage', () => {
    const message = 'test message';

    const expectedResult = {
      type: SET_ERROR_MESSAGE,
      message,
    };

    expect(setErrorMessage(message)).toEqual(expectedResult);
  });

  it('loadAdsListSend', () => {
    const expectedResult = {
      type: LOAD_ADS_LIST_SEND,
    };

    expect(loadAdsListSend()).toEqual(expectedResult);
  });

  it('loadAdsListSuccess', () => {
    const dataArray = [];
    const expectedResult = {
      type: LOAD_ADS_LIST_SUCCESS,
      data: dataArray,
    };

    expect(loadAdsListSuccess(dataArray)).toEqual(expectedResult);
  });
});
