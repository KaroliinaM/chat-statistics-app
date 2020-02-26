import React, {useState, useEffect} from 'react'
import StatsBoxContainer from './container/StatsBoxContainer'
import Arguments from './container/FormContainer'
import DailyStats from './container/DailyStats'
import {Container} from 'semantic-ui-react'


const App = () => {
  const [startDate, setStartDate]=useState('')
  const [endDate, setEndDate]=useState('')
  const [token, setToken]=useState('')
  const [stats, setStats]=useState({})

  useEffect(() => {
    const url = "https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=2017-05-01&end_date=2017-05-10"
    const headers = {
      method: 'GET',
      headers: {
        'Accept': "application/json",
        Authorization: `Token ${token}`
      }
    }
    fetch(url, headers).then(response=>response.json()).then(data=>{
      console.log(data)
      setStats(data)
    })
  }, [token])

  return (
    <Container>
      Hello World!
      <Arguments
        startDate={startDate} 
        setStartDate={(e)=>setStartDate(e.target.value)} 
        endDate={endDate} 
        setEndDate={(e)=>setEndDate(e.target.value)}
        token={token}
        setToken={(e)=>setToken(e.target.value)}
      />
      <StatsBoxContainer stats={stats} />
      <DailyStats stats={stats} />
    </Container>
  )
}

export default App;
