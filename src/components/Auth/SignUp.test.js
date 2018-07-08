import enzyme, {shallow} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });

import React from 'react';
import {SignUp} from './SignUp';

describe('<SignUp />', () => {
  let wrapper;
  let onBack = jest.fn();
  let onClose = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<SignUp onBack={onBack} onClose={onClose}/>);
  });

  it('renders Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
