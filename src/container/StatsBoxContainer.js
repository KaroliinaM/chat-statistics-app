import React from 'react'
import StatsBox from '../component/StatsBox'
import PropTypes from 'prop-types'

const StatsBoxContainer = (props) => {
  const { stats } = props
  const CONVERSATION_COUNT = 'Total conversation count'
  const USER_MESSAGE_COUNT = 'Total user message count'
  const VISITOR_MESSAGE_COUNT = 'total visitor message count'

  return (
    <div className="container-layout">
      <StatsBox num={stats.total_conversation_count} stats={CONVERSATION_COUNT} />
      <StatsBox num={stats.total_user_message_count} stats={USER_MESSAGE_COUNT} />
      <StatsBox num={stats.total_visitor_message_count} stats={VISITOR_MESSAGE_COUNT} />
    </div>
  )
}

StatsBoxContainer.propTypes = {
  stats: PropTypes.object
}

export default StatsBoxContainer
