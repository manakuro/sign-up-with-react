import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

it('should render', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
})
