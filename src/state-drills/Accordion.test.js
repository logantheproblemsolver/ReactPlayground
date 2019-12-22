import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordion from './Accordion';


const section = [
    {
      title: 'Title1',
      content: 'Content1',
    },
    {
      title: 'Title2',
      content: 'Content2',
    },
    {
      title: 'Title3',
      content: 'Content3',
    },
    {
      title: 'Title4',
      content: 'Content4'
    }
  ]


describe('Accordion Component', () => {
    it('renders empty given no Accordion without errors', () => {
        const wrappers = shallow(<Accordion />)
        expect(toJson(wrappers)).toMatchSnapshot()
    })
    it('renders no sections by default', () => {
        const wrappers = shallow(<Accordion section={section} />)
    })
    it('opens any clicked section', () => {
        const wrappers = shallow(<Accordion section={section} />)
        wrappers.find('button').at(1).simulate('click')
        expect(toJson(wrappers)).toMatchSnapshot()
    })
    it('only opens one section at a time', () => {
        const wrapper = shallow(<Accordion section={section} />)
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})