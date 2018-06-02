import enzyme, {shallow} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });

import React from 'react';
import SignUp from './SignUp';

it('renders SignUp', () => {
  const snapshot = shallow(<SignUp baseComponent={()=>{}} />);
  expect(snapshot).toMatchSnapshot();
});
