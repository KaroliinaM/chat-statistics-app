
const get = (token, startDate, endDate) => {
  const url = `https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${startDate}&end_date=${endDate}`
  const headers = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Token ${token}`
    }
  }
  return fetch(url, headers).then(response => response.json())
}

export default { get }
