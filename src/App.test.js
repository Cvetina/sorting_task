import React from 'react';
import ReactDOM from 'react-dom';

import { configure, shallow, mount, unmount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import App from './App';
import SelectList from './SelectList';
import DataList from './DataList';
import database from './data.test.js';

configure({ adapter: new Adapter() });

it('New renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('Renders SelectList', () => {
  const component = mount(<App />);
  expect(component.find(SelectList).length).toEqual(1);
});

it('Renders DataList', () => {
  const component = mount(<App />);
  expect(component.find(DataList).length).toEqual(1);
});

it('Passes all props to DataList', () => {
  const component = mount(<App />);
  expect(component.find(DataList).props().containerClass).toEqual('listContainer');
  expect(component.find(DataList).props().itemClass).toEqual('listItem');
});
