import enzyme, {shallow} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });

import React from 'react';
import LogIn from './LogIn';

it('renders LogIn', () => {
  const snapshot = shallow(<LogIn baseComponent={()=>{}} />);
  expect(snapshot).toMatchSnapshot();
});
