import { LOAD_NEXT } from './constants';

export function loadNext(count) { // eslint-disable-line import/prefer-default-export
  return {
    type: LOAD_NEXT,
    data: count,
  };
}
