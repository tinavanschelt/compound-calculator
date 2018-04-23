import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

import Select from '../../components/Select';

import { getCurrencyRates } from './actions';

class Graph extends Component {
  componentWillReceiveProps(props) {
    const { onGetCurrencyRates } = props;
    onGetCurrencyRates();
  }

  render() {
    const { data, currencyRates } = this.props;
    return (
      <Fragment>
        {data.length > 0 && (
          <Fragment>
            <Select
              firstOption="Convert Currency"
              data={['EU', 'GBP', 'USD', 'ZAR']}
            />
            <LineChart width={600} height={600} data={data}>
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

const mapStateToProps = state => ({
  currencyRates: state.getIn(['graph', 'currencyRates'])
});

export const mapDispatchToProps = dispatch => ({
  onGetCurrencyRates: data => dispatch(getCurrencyRates(data))
});

Graph.propTypes = {
  currencyRates: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
