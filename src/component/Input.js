import React from 'react'

const Input = ({label, value, name, onChange}) => (
    <>
        {label}
        <input name={name} value={value} onChange={onChange} />
    </>
)

export default Input