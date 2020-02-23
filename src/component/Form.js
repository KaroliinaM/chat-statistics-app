import React from 'react'
import Input from './Input'

const Form = ({startDate, setStartDate, endDate, setEndDate, token, setToken}) => (
    <>
        <form>
            <Input
                label="StartDate"
                name="startDate"
                value={startDate}
                onChange={setStartDate}
            />
            <Input
                label="EndDate"
                name="EndDate"
                value={endDate}
                onChange={setEndDate}
            />
            <Input
                label="Token"
                name="token"
                value={token}
                onChange={setToken}
            />
        </form>
    </>
)

export default Form