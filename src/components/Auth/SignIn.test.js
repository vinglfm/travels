import enzyme, {shallow} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });

import React from 'react';
import {SignIn} from './SignIn';

describe('<SignIn />', () => {
  let wrapper;
  let onBack = jest.fn();
  let onClose = jest.fn();
  
  beforeEach(() => {
    wrapper = shallow(<SignIn onBack={onBack} onClose={onClose}/>);
  });

  it('renders SignIn', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
