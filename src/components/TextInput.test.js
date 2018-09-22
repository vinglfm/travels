import enzyme, {shallow} from 'enzyme';
import ReactAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactAdapter() });

import React from 'react';
import TextInput from './TextInput';

describe('<TextInput />', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<TextInput />);
  });

  it('renders text input pure component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
