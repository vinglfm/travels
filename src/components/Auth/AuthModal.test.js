import enzyme, {mount, shallow} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });

import React from 'react';
import SignInModal from './AuthModal';

it('renders SignInModal in base state', () => {
  const snapshot = shallow(<SignInModal open handleClose={()=>{}} />);
  expect(snapshot).toMatchSnapshot();
});

it('renders SignInModal in logIn state', () => {
    const snapshot = shallow(<SignInModal open handleClose={()=>{}} />);
    snapshot.instance().logInComponent();
    snapshot.update();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders SignInModal in signUp state', () => {
    const snapshot = shallow(<SignInModal open handleClose={()=>{}} />);
    snapshot.instance().signUpComponent();
    snapshot.update();
    expect(snapshot).toMatchSnapshot();
  });
