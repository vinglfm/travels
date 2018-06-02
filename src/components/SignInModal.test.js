import enzyme, {shallow} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });

import React from 'react';
import SignInModal from './SignInModal';

it('renders SignInModal', () => {
  const snapshot = shallow(<SignInModal open handleClose={()=>{}} />);
  expect(snapshot).toMatchSnapshot();
});
