import React from 'react'
import { Card } from 'semantic-ui-react'
import '../css/StatsBox.css'
import PropTypes from 'prop-types'

const StatsBox = (props) => {
  const { num, stats } = props
  console.log(num, stats)
  return (
    <Card className='box-layout'>
      <div id="statNumber" className="box-stat-number">{num}</div>
      <div id="statDefinition" className="box-stat-definition">{stats}</div>
    </Card>
  )
}

StatsBox.propTypes = {
  num: PropTypes.number,
  stats: PropTypes.string
}

export default StatsBox
