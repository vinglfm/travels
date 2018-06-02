import enzyme, {shallow} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });

import React from 'react';
import Header from './Header';

it('renders Header', () => {
  const snapshot = shallow(<Header />);
  expect(snapshot).toMatchSnapshot();
});
