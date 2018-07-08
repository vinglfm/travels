import enzyme, {shallow} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });

import React from 'react';
import {LogIn} from './LogIn';

describe('<LogIn />', () => {
  let wrapper;
  let onBack = jest.fn();
  let onClose = jest.fn();
  
  beforeEach(() => {
    wrapper = shallow(<LogIn onBack={onBack} onClose={onClose}/>);
  });

  it('renders LogIn', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
