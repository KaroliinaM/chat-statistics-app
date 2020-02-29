import React from 'react'
import { Form, Input, Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Arguments = ({ startDate, setStartDate, endDate, setEndDate, token, setToken }) => (
  <div>
    <Grid stackable columns={2} verticalAlign="middle">
      <Grid.Row>
        <Grid.Column>
          <Form>
            <Form.Group widhts='equal'>
              <Form.Input
                id='inputFrom'
                label="Start date"
                value={startDate}
                onChange={setStartDate}
              />
              <Form.Input
                id='inputTo'
                label="End date"
                name="endDate"
                value={endDate}
                onChange={setEndDate}
              />
            </Form.Group>
          </Form>
        </Grid.Column>
        <Grid.Column textAlign="right">
          <Input size="small" className="input-style"
            id='inputToken'
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

Arguments.propTypes = {
  startDate: PropTypes.string,
  setStartDate: PropTypes.func,
  endDate: PropTypes.string,
  setEndDate: PropTypes.func,
  token: PropTypes.string,
  setToken: PropTypes.func
}

export default Arguments
