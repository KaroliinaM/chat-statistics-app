import React from 'react'
import StatsBox from '../component/StatsBox'
import PropTypes from 'prop-types'

const StatsBoxContainer = (props) => {
  const { stats } = props
  return (
    <div className="container-layout">
      <StatsBox num={stats.total_conversation_count} stats="Total conversation count" />
      <StatsBox num={stats.total_user_message_count} stats="Total user message count" />
      <StatsBox num={stats.total_visitor_message_count} stats="total visitor message count" />
    </div>
  )
}

StatsBoxContainer.propTypes = {
  stats: PropTypes.object
}

export default StatsBoxContainer
