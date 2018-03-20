import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Button from '../index';

configure({ adapter: new Adapter() });

function noop() {}
const defaultProps = {
  labelValue: 'test',
  onClick: noop,
};

describe('<Button />', () => {
  it('calls passed function on click', () => {
    const handler = jest.fn();

    const renderedComponent = shallow(<Button { ...defaultProps } onClick={ handler } />);
    renderedComponent.simulate('click');

    expect(handler.mock.calls.length).toEqual(1);
  });

  it('renders label', () => {
    const renderedComponent = shallow(<Button { ...defaultProps } />);
    expect(renderedComponent.render().text()).toEqual(defaultProps.labelValue);
  });
});
