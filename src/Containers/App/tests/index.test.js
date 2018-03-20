import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { AppComponent } from '../index';

configure({ adapter: new Adapter() });

function noop() {}
const defaultProps = {
  showLoader: false,
  errorMessage: '',
  handleHideError: noop,
  children: [],
};

describe('<App />', () => {
  it('has no error element', () => {
    const renderedComponent = shallow(<AppComponent { ...defaultProps } />);
    expect(renderedComponent.find('ErrorMessage').length).toEqual(0);
  });

  it('has no loader element', () => {
    const renderedComponent = shallow(<AppComponent { ...defaultProps } />);
    expect(renderedComponent.find('LoadingIndicator').length).toEqual(0);
  });

  it('when passed error string, renders error', () => {
    const message = 'test message';
    const renderedComponent = shallow(<AppComponent { ...defaultProps } errorMessage={ message } />);
    expect(renderedComponent.find('ErrorMessage').length).toEqual(1);
    expect(renderedComponent.find('ErrorMessage').render().text()).toEqual(message);
  });

  it('when passed loader, renders loader indicator', () => {
    const renderedComponent = shallow(<AppComponent { ...defaultProps } showLoader />);
    expect(renderedComponent.find('LoadingIndicator').length).toEqual(1);
  });

  it('on escape press hides error message', () => {
    const handler = jest.fn();

    const renderedComponent = mount(<AppComponent { ...defaultProps } handleHideError={ handler } errorMessage='test' />);

    global.document.dispatchEvent(new KeyboardEvent('keyup', { keyCode: 27 }));

    expect(handler.mock.calls.length).toEqual(1);
    renderedComponent.unmount();
  });
});
