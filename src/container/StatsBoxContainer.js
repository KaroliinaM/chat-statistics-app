import React from 'react'
import StatsBox from '../component/StatsBox'

const StatsBoxContainer = (props) => {
    const {stats}=props
    return (
        <div className="container-layout">
            <StatsBox num={stats.total_conversation_count} stats="luku" />
            <StatsBox num={stats.total_user_message_count} stats="luku" />
            <StatsBox num={stats.total_visitor_message_count} stats="luku" />
        </div>
    )
}
export default StatsBoxContainer