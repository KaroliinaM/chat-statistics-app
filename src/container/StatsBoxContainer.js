import React from 'react'
import StatsBox from '../component/StatsBox'

const StatsBoxContainer = () => {
    return (
        <div className="container-layout">
            <StatsBox num={2000} stats="luku" />
            <StatsBox num={2000} stats="luku" />
            <StatsBox num={2000} stats="luku" />
        </div>
    )
}
export default StatsBoxContainer