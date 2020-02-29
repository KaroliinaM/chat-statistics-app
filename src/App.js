import React, { useState, useEffect } from 'react'
import StatsBoxContainer from './container/StatsBoxContainer'
import Arguments from './container/Arguments'
import DailyStats from './container/DailyStats'
import { Container } from 'semantic-ui-react'
import statsData from './service/StatisticData'
import './css/Styles.css'

const App = () => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [token, setToken] = useState('')
  const [stats, setStats] = useState({})

  const INSERT_ARGUMENTS = 'Please insert valid arguments for start date, end date and your token'

  useEffect(() => {
    if (startDate.length > 0 && endDate.length > 0 && token.length > 0) {
      statsData.get(token, startDate, endDate).then(data => {
        setStats(data)
        window.localStorage.setItem('specs', JSON.stringify({ start: startDate, end: endDate, token: token }))
      }).catch(e => console.log(e))
    } else {
      const localData = window.localStorage.getItem('specs')
      if (localData) {
        const specs = JSON.parse(localData)
        setStartDate(specs.start)
        setEndDate(specs.end)
        setToken(specs.token)
      }
    }
  }, [token, startDate, endDate])

  return (
    <Container>
      <Arguments
        startDate={startDate}
        setStartDate={(e) => setStartDate(e.target.value)}
        endDate={endDate}
        setEndDate={(e) => setEndDate(e.target.value)}
        token={token}
        setToken={(e) => setToken(e.target.value)}
      />
      {(stats.by_date)
        ? (<>
          <StatsBoxContainer stats={stats} />
          <DailyStats stats={stats} />
        </>)
        : <>{INSERT_ARGUMENTS}</>
      }
    </Container>
  )
}

export default App
