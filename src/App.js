import React, { useState, useEffect } from 'react'
import StatsBoxContainer from './container/StatsBoxContainer'
import Arguments from './container/Arguments'
import DailyStats from './container/DailyStats'
import { Container } from 'semantic-ui-react'
import statsData from './service/StatisticData'

const App = () => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [token, setToken] = useState('')
  const [stats, setStats] = useState({})

  useEffect(() => {
    statsData.get(token).then(data => {
      setStats(data)
    })
  }, [token])

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
        : <>Please insert start date, end date and your token</>
      }
    </Container>
  )
}

export default App
