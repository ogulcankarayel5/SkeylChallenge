import React from 'react'

import {Textarea} from '../shared'

import renderer from 'react-test-renderer'
import 'jest-styled-components'



describe("Button snapshot",() => {
   
    it("should match snapshot",() => {
        const tree = renderer.create(<Textarea/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
}) 