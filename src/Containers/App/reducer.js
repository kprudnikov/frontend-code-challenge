import { fromJS } from 'immutable';

import {
  SET_LOADER,
  SET_ERROR_MESSAGE,
} from './constants';

const initialState = fromJS({
  errorMessage: '',
  showLoader: true,
});

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADER:
      return state.set('showLoader', action.showLoader);
    case SET_ERROR_MESSAGE:
      return state.set('errorMessage', action.message);
    default:
      return state;
  }
}
