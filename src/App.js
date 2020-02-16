import React from 'react'
import StatsBoxContainer from './container/StatsBoxContainer'


const App = () => {
  const url = "https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=2017-05-01&end_date=2017-05-10"
  const headers = {
    method: 'GET',
    headers: {
      'Accept': "application/json",
      Authorization: "Token 38ab33b9f32a3478555d1e06189d50f01a872966"
    }
  }
  fetch(url, headers).then(response=>response.json()).then(data=>console.log(data))
  return (
    <div>
      Hello World!
      <StatsBoxContainer />
    </div>
  )
}

export default App;
