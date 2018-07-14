import enzyme, {shallow} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });

import React from 'react';
import {Auth} from './Auth';

it('renders Auth', () => {
  const snapshot = shallow(<Auth onSignIn={()=>{}} />);
  expect(snapshot).toMatchSnapshot();
});

it('renders SignIn component when state is chagned to LogIn', () => {
  const snapshot = shallow(<Auth onSignIn={()=>{}} />);
  snapshot.instance().renderComponent('SignIn');
  snapshot.update();
  expect(snapshot).toMatchSnapshot();
});

it('renders SignUp component when state is changed to SignUp', () => {
  const snapshot = shallow(<Auth onSignIn={()=>{}} />);
  snapshot.instance().renderComponent('SignUp');
  snapshot.update();
  expect(snapshot).toMatchSnapshot();
});
