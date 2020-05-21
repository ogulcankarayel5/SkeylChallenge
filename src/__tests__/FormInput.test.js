import React from 'react'
import { shallow} from "enzyme";
import {FormInput} from '../shared'
import {findByTestAtrr} from '../utils'
import {theme} from '../shared'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

const setUp = (
    props={}
  ) => {
    const component = shallow(<FormInput {...props} />);
    return component;
  }; 

describe("FormInput component",() => {
    describe("have props",() => {

        let wrapper;

        beforeEach(() => {
            const props={className:"deneme"}
            wrapper=setUp(props)
        })
      it("should match classname",() => {
        const component = findByTestAtrr(wrapper,"Input")
        expect(component.length).toBe(1)
       
      })
    })
})


describe("FormInput snapshot",() => {
    
    it("should match snapshot",() => {
        const tree = renderer.create(<FormInput theme={theme}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
}) //snapshot sıkıntılı