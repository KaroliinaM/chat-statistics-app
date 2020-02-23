import React from 'react'
import Form from '../component/Form'

const FormContainer = ({startDate, setStartDate, endDate, setEndDate, token, setToken}) => {
    return (
        <>
            <Form 
                startDate={startDate} 
                setStartDate={setStartDate} 
                endDate={endDate} 
                setEndDate={setEndDate}
                token={token}
                setToken={setToken}
            />
        </>
    )
}

export default FormContainer