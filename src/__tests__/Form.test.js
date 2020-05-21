import React from 'react'

import {Form} from '../components'

import renderer from 'react-test-renderer'
import 'jest-styled-components'



describe("Form snapshot",() => {
    
    it("should match snapshot",() => {
        const tree = renderer.create(<Form/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
}) 