import { LOAD_NEXT } from '../constants';
import { loadNext } from '../actions';

describe('AdsList actions', () => {
  it('loadNext', () => {
    const count = 10;

    const expectedResult = {
      type: LOAD_NEXT,
      data: count,
    };

    expect(loadNext(count)).toEqual(expectedResult);
  });
});
