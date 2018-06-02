import enzyme, {shallow} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });

import React from 'react';
import SignIn from './SignIn';

it('renders SignIn', () => {
  const snapshot = shallow(<SignIn logInComponent={()=>{}} signUpComponent={()=>{}} />);
  expect(snapshot).toMatchSnapshot();
});
