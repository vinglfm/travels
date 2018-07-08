import enzyme, {shallow} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });

import React from 'react';
import {SignIn} from './SignIn';

it('renders SignIn', () => {
  const snapshot = shallow(<SignIn onSignIn={()=>{}} />);
  expect(snapshot).toMatchSnapshot();
});

it('renders LogIn component when state is chagned to LogIn', () => {
  const snapshot = shallow(<SignIn onSignIn={()=>{}} />);
  snapshot.instance().renderComponent('LogIn');
  snapshot.update();
  expect(snapshot).toMatchSnapshot();
});

it('renders SignUp component when state is changed to SignUp', () => {
  const snapshot = shallow(<SignIn onSignIn={()=>{}} />);
  snapshot.instance().renderComponent('SignUp');
  snapshot.update();
  expect(snapshot).toMatchSnapshot();
});
