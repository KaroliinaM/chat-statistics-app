/* eslint-disable no-undef */
import React from 'react'
import { mount } from 'enzyme'
import Arguments from '../container/Arguments'

const mockHandler = () => {}

const parameters = {
  startDate: 'from',
  setStartDate: mockHandler,
  endDate: 'to',
  setEndDate: mockHandler,
  token: 'token',
  setToken: mockHandler
}

describe('component renders', () => {
  let component
  beforeEach(() => {
    component = mount(<Arguments startDate={parameters.startDate} setStartDate={parameters.setStartdate} endDate={parameters.endDate} setEndDate={parameters.setEndDate} token={parameters.token} setToken={parameters.setToken} />)
  })
  test('test rendering', () => {
    expect(component).not.toBe(undefined)
  })
  test('fields render', () => {
    const fromField = component.find('input#inputFrom')
    expect(fromField.length).toBe(1)
    const toField = component.find('input#inputTo')
    expect(toField.length).toBe(1)
    const tokenField = component.find('input#inputToken')
    expect(tokenField.length).toBe(1)
  })
})
