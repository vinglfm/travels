import enzyme, { shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });

import React from 'react';
import AuthModal from './AuthModal';

it('renders AuthModal', () => {
  const snapshot = shallow(<AuthModal open handleClose={() => { }} />);
  expect(snapshot).toMatchSnapshot();
});