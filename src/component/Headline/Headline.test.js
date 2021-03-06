import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtrr, checkProps } from '../../utils/'
import Headline from './index'

const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />)
    return component
}

describe('Headline Comopnent', () => {
    describe('Checking PropTypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                header: 'Test',
                desc: 'Test',
                tempArr: [
                    {
                        fName: 'Test',
                        lName: 'Test',
                        email: 'test@gmail.com',
                        age: 23,
                        onlineStatus: false,
                    },
                ],
            }

            const propsErr = checkProps(Headline, expectedProps)
            expect(propsErr).toBeUndefined()
        })
    })

    describe('Have Props', () => {
        let wrapper
        beforeEach(() => {
            const props = {
                header: 'Test Headline',
                desc: 'Test desc',
            }
            wrapper = setUp(props)
        })

        it('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'headline')
            expect(component.length).toBe(1)
        })

        it('should render an h1', () => {
            const h1 = findByTestAtrr(wrapper, 'headline')
            expect(h1.length).toBe(1)
        })

        it('should render an des', () => {
            const desc = findByTestAtrr(wrapper, 'desc')
            expect(desc.length).toBe(1)
        })
    })

    describe('Have NO Props', () => {
        let wrapper
        beforeEach(() => {
            wrapper = setUp()
        })

        it('Should NOT render', () => {
            const component = findByTestAtrr(wrapper, 'headline')
            expect(component.length).toBe(0)
        })
    })
})
