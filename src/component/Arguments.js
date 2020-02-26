import React from 'react'
import { Form, Input, Grid } from 'semantic-ui-react'
import '../css/StatsBox.css'

const Arguments = ({startDate, setStartDate, endDate, setEndDate, token, setToken}) => (
    <div>
        <Grid columns={2} verticalAlign="middle">
        <Grid.Row>
            <Grid.Column>
        <Form>
            <Form.Group widhts='equal'>
                <Form.Input 
                label="startDate"
                value={startDate}
                onChange={setStartDate} 
                />
                <Form.Input
                label="EndDate"
                name="EndDate"
                value={endDate}
                onChange={setEndDate}
                />
            </Form.Group>
        </Form>
        </Grid.Column>
        <Grid.Column textAlign="right">
        <Input size="small" className="test"
            label="Token"
            name="token"
            value={token}
            onChange={setToken}
        />
        </Grid.Column>
        </Grid.Row>
        </Grid>
    </div>
)

export default Arguments