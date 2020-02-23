import React from 'react'

const DailyStats = ({stats}) => {
    console.log("daily", stats)
    if(stats.by_date) {
        return (
            <table>
                <thead>
                    <tr>
                        <td>
                            conversation_count
                        </td>
                        <td>
                            date.missed_chat_count
                        </td>
                        <td>
                            visitors_with_conversation_count
                        </td>
                        <td>date</td>
                    </tr>
                </thead>       
                {stats.by_date.map(date => {
                return <tr><td>{date.conversation_count}</td><td>{date.missed_chat_count}</td><td>{date.visitors_with_conversation_count}</td><td>{date.date} </td></tr>
            })}
        </table>
        )
        
    }
    return <></>
}

export default DailyStats