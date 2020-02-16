import React from 'react'
import '../css/StatsBox.css'

const StatsBox = (props) => {
    const {num, stats} = props
    console.log(num, stats)
    return (
        <div className='box-layout'>
            <div className="box-stat-number">{num}</div>
            <div className="box-stat-definition">{stats}</div>
        </div>
    )
}

export default StatsBox