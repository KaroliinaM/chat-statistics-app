import React from 'react'
import {Card} from 'semantic-ui-react' 
import '../css/StatsBox.css'

const StatsBox = (props) => {
    const {num, stats} = props
    console.log(num, stats)
    return (
        <Card className='box-layout'>
            <div className="box-stat-number">{num}</div>
            <div className="box-stat-definition">{stats}</div>
        </Card>
    )
}

export default StatsBox