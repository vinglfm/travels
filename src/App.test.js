import enzyme, {shallow} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });

import React from 'react';
import App from './App';

it('renders App', () => {
  const snapshot = shallow(<App />);
  expect(snapshot).toMatchSnapshot();
});
