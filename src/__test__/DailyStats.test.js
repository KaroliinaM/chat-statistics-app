/* eslint-disable no-undef */
import React from 'react'
import {mount} from 'enzyme'
import DailyStats from '../container/DailyStats'

const stats={
  by_date: [
    {
      conversation_count: 82,
      missed_chat_count: 53,
      visitors_with_conversation_count: 12,
      date: '2019-4-21'
    },
    {
      conversation_count: 23,
      missed_chat_count: 75,
      visitors_with_conversation_count: 33,
      date: '2019-5-21'
    },
    {
      conversation_count: 72,
      missed_chat_count: 3,
      visitors_with_conversation_count: 4,
      date: '2019-6-21'
    },
    {
      conversation_count: 34,
      missed_chat_count: 5,
      visitors_with_conversation_count: 90,
      date: '2019-7-21'
    },
    {
      conversation_count: 12,
      missed_chat_count: 2,
      visitors_with_conversation_count: 55,
      date: '2019-8-21'
    },
    {
      conversation_count: 93,
      missed_chat_count: 0,
      visitors_with_conversation_count: 45,
      date: '2019-9-21'
    }
  ]
}

describe('component renders', () => {
  let component
  beforeEach(() => {
    component = mount(<DailyStats stats={stats} />)
  })
  test('component renders', () => {
    expect(component).not.toBe(undefined)
  })
})
describe('test pagination', () => {
  let component
  beforeEach(() => {
    component = mount(<DailyStats stats={stats} />)
  })
  test('', () => {
    console.log(component.debug())
    const rows = component.find('TableRow#statRow')
    expect(rows.length).toBe(5)
    const buttons = component.find('a')
    const button = buttons.at(3)
    button.simulate('click')
    const rowsNext = component.find('TableRow#statRow')
    expect(rowsNext.length).toBe(1)
  })
})
