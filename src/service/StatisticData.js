
const get = (token) => {
  const url = 'https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=2017-05-01&end_date=2017-05-10'
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