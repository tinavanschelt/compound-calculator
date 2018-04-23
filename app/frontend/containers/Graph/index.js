import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

import Select from '../../components/Select';

import { getCurrencyRates } from './actions';

class Graph extends Component {
  componentWillReceiveProps(props) {
    const { onGetCurrencyRates } = props;
    const currencies = 'USD,GBP,ZAR';
    onGetCurrencyRates(currencies);
  }

  convertDataToCurrency(e, calculatedData) {
    const { target } = e;
    const { value } = target;

    // map deur en maal met value
    const currencySpecificData = calculatedData;

    // calculatedData.map((data)) => {
    //   currencySpecificData
    // }
    console.log('currency!', value);
  }

  render() {
    const { data, currencyRates, calculatedData } = this.props;
    return (
      <Fragment>
        {data.length > 0 && (
          <Fragment>
            <Select
              firstOption="Convert Currency"
              data={currencyRates}
              onChange={e => this.convertDataToCurrency(e)}
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
  calculatedData: state.getIn(['calculator', 'calculatedData']),
  currencyRates: state.getIn(['graph', 'currencyRates'])
});

export const mapDispatchToProps = dispatch => ({
  onGetCurrencyRates: currencies => dispatch(getCurrencyRates(currencies))
});

Graph.propTypes = {
  currencyRates: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
