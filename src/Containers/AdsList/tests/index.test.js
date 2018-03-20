import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { AdsListComponent } from '../index';
import ads from './adsMock.json';

configure({ adapter: new Adapter() });

function noop() {}
const defaultProps = {
  handleLoadAdsListSend: noop,
  handleLoadNext: noop,
  ads: [],
};

describe('<AdsList />', () => {
  it('renders ads', () => {
    const renderedComponent = shallow(<AdsListComponent { ...defaultProps } ads={ ads } />);
    expect(renderedComponent.find('.adsList > li').length).toEqual(ads.length);
  });

  it('loads ads on mount', () => {
    const handler = jest.fn();
    const renderedComponent = mount(<AdsListComponent { ...defaultProps } handleLoadAdsListSend={ handler } />);

    expect(handler.mock.calls.length).toEqual(1);
    renderedComponent.unmount();
  });
  it('loads next 10 ads on "Load more" button click', () => {
    const handler = jest.fn();

    const renderedComponent = shallow(<AdsListComponent { ...defaultProps } handleLoadNext={ handler } />);
    renderedComponent.find('Button').simulate('click');

    expect(handler.mock.calls.length).toEqual(1);
  });
});
