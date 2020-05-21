import React from 'react'

import {Input} from '../shared'
import {theme} from '../shared'
import renderer from 'react-test-renderer'
import 'jest-styled-components'



describe("Button snapshot",() => {
    
    it("should match snapshot",() => {
        const tree = renderer.create(<Input theme={theme}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
}) 