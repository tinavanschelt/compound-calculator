import React, { Component, Fragment } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

import Select from '../../components/Select';

class Graph extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        {data.length > 0 && (
          <Fragment>
            <Select
              firstOption="Convert Currency"
              data={['EU', 'GBP', 'USD', 'ZAR']}
            />
            <LineChart width={800} height={800} data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="totalAmount" stroke="#8884d8" />
            </LineChart>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default Graph;
