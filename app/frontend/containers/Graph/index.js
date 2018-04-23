import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

import Select from '../../components/Select';

import { getCurrencyRates } from './actions';
import { setConvertedData } from '../Calculator/actions';

class Graph extends Component {
  componentWillReceiveProps(prevProps) {
    const { convertedData, onGetCurrencyRates } = this.props;
    const currencies = 'USD,GBP,ZAR';

    if (convertedData !== prevProps.convertedData) {
      console.log('FIRING!');
      onGetCurrencyRates(currencies);
    }
  }

  convertDataToCurrency(e) {
    const { target } = e;
    const { value } = target;

    const { onSetConvertedData, calculatedData } = this.props;

    if (value !== 'default') {
      if (value == -1) {
        onSetConvertedData(calculatedData);
      } else {
        const convertedData = [];

        calculatedData.map(data => {
          const convertedAmount = data.totalAmount * value;
          convertedData.push({
            month: data.month,
            totalAmount: convertedAmount
          });
        });

        onSetConvertedData(convertedData);
      }
    }
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
  convertedData: state.getIn(['calculator', 'convertedData']),
  currencyRates: state.getIn(['graph', 'currencyRates'])
});

export const mapDispatchToProps = dispatch => ({
  onGetCurrencyRates: currencies => dispatch(getCurrencyRates(currencies)),
  onSetConvertedData: data => dispatch(setConvertedData(data))
});

Graph.propTypes = {
  calculatorRates: PropTypes.object,
  convertedRates: PropTypes.object,
  currencyRates: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
