import {
  SET_LOADER,
  LOAD_ADS_LIST_SEND,
  LOAD_ADS_LIST_SUCCESS,
  SET_ERROR_MESSAGE,
} from './constants';

export function setLoader(showLoader) {
  return {
    type: SET_LOADER,
    showLoader,
  };
}

export function setErrorMessage(message) {
  return {
    type: SET_ERROR_MESSAGE,
    message,
  };
}

export function loadAdsListSend() {
  return {
    type: LOAD_ADS_LIST_SEND,
  };
}

export function loadAdsListSuccess(data) {
  return {
    type: LOAD_ADS_LIST_SUCCESS,
    data,
  };
}
