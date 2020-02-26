import React, {useState} from 'react'
import {Table, Menu, Icon, Pagination} from 'semantic-ui-react'

const DailyStats = ({stats}) => {
    const [page, setPage]=useState(1)
    console.log("daily", stats)

    if(stats.by_date) {
        const itemsOnPage=4
        const pages=stats.by_date.length%itemsOnPage===0? stats.by_date.length/itemsOnPage:Math.floor(stats.by_date.length/itemsOnPage)+1;
        const activePages=()=> {
            const endPage=page*itemsOnPage>=stats.by_date.length? stats.by_date.length:page*itemsOnPage
            return stats.by_date.slice((page-1)*itemsOnPage, endPage)
        }

        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        {console.log("pages", activePages())}
                        <Table.HeaderCell>
                            conversation_count
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            date.missed_chat_count
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            visitors_with_conversation_count
                        </Table.HeaderCell>
                        <Table.HeaderCell>date</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>       
                {activePages().map(date => {
                return  <Table.Row key={date.date}>
                            <Table.Cell>{date.conversation_count}</Table.Cell>
                            <Table.Cell>{date.missed_chat_count}</Table.Cell>
                            <Table.Cell>{date.visitors_with_conversation_count}</Table.Cell>
                            <Table.Cell>{date.date}</Table.Cell>
                        </Table.Row>
            })}
            </Table.Body>
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan={7}>
                    <Pagination floated='right'
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={pages}
                        onPageChange={(e, pageInfo) => {
                            setPage(pageInfo.activePage)}}
                    />
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
        )
        
    }
    return <></>
}

export default DailyStats