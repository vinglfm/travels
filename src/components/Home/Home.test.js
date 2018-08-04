import enzyme, {shallow} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });

import React from 'react';
import Home from './Home';

it('renders Home', () => {
  const snapshot = shallow(<Home />);  
  expect(snapshot).toMatchSnapshot();
});
