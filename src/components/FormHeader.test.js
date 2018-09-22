import enzyme, {shallow} from 'enzyme';
import ReactAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactAdapter() });

import React from 'react';
import FormHeader from './FormHeader';

describe('<FormHeader />', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<FormHeader/>);
  });

  it('renders form header pure component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
