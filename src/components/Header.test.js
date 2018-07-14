import enzyme, {shallow} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });

import React from 'react';
import {Header} from './Header';

describe('<Header />', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('renders SignIn', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
