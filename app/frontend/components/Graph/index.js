import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

class Graph extends Component {
  render() {
    return (
      <LineChart width={400} height={400} data={this.props.data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="totalAmount" stroke="#8884d8" />
      </LineChart>
    );
  }
}

export default Graph;
