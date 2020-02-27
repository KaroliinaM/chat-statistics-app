import React from 'react'
import { mount } from 'enzyme'
import StatsBoxContainer from '../container/StatsBoxContainer'

const stats={
    total_conversation_count:34,
    total_user_message_count:48,
    total_visitor_message_count:45
}

describe('ekStatistic boxes', ()=> {
    test('component renders', () => {
        const komponentti=mount(<StatsBoxContainer stats={stats} />)
        expect(komponentti).not.toBe(undefined)
    })
    test('stats are shown', () => {
        const component=mount(<StatsBoxContainer stats={stats} />)
        const statNumber=component.find('div#statNumber')
        console.log(statNumber.at(0).text()) 
        expect(statNumber.length).toBe(3)
        expect(statNumber.at(0).text()).toBe("34")
        expect(statNumber.at(1).text()).toBe("48")
        expect(statNumber.at(2).text()).toBe("45")
        
    }
    )

})
