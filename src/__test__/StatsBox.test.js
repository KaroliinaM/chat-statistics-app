import React from 'react'
import { mount } from 'enzyme'
import StatsBoxContainer from '../container/StatsBoxContainer'

describe('ekStatistic boxes', ()=> {
    test('component renders', () => {
        const komponentti=mount(<StatsBoxContainer />)
        expect(komponentti).not.toBe(undefined)
    })

})
