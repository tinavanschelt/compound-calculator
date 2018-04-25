import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

import Select from '../../components/Select';
import Grid from '../../components/Grid';
import GridItem from '../../components/GridItem';

import { getCurrencyRates, setCurrency } from './actions';
import { setConvertedData } from '../Calculator/actions';

let graphWidth;
let graphHeight;

class Graph extends Component {
  componentDidMount() {
    graphWidth = this.containerRef.clientWidth - 100;
    graphHeight = this.containerRef.clientHeight - 200;

    if (graphHeight < 250) {
      graphHeight = 250;
    }
  }

  componentWillReceiveProps(prevProps) {
    const { convertedData, onGetCurrencyRates } = this.props;
    const currencies = 'USD,GBP,ZAR';

    if (convertedData !== prevProps.convertedData) {
      onGetCurrencyRates(currencies);
    }
  }

  convertDataToCurrency(e) {
    const { target } = e;
    const { value, selectedIndex, options } = target;

    const { onSetConvertedData, onSetCurrency, calculatedData } = this.props;

    if (value !== 'default') {
      const selectedCurrency = options[selectedIndex].text;
      onSetCurrency(selectedCurrency);

      if (value === '-1') {
        onSetConvertedData(calculatedData);
      } else {
        const convertedData = [];

        /* eslint-disable array-callback-return */
        calculatedData.map(data => {
          const convertedAmount = +(data.total * value).toFixed(2);
          convertedData.push({
            month: data.month,
            total: convertedAmount
          });
        });

        onSetConvertedData(convertedData);
      }
    }
  }

  render() {
    const { data, currency, currencyRates } = this.props;
    return (
      <div
        ref={element => {
          this.containerRef = element;
        }}
        style={{ width: '100%', height: '100%', padding: '0 2em 0 1em' }}
      >
        {/* Used div instead of Fragment in order to be able to use ref 
            (ref slightly more complicated on a styled-component) */}
        {data.length > 0 && (
          <Grid columns="3">
            <GridItem col="1 / span 3" row="1">
              <h1>
                Showing total compounded amounts for each month in {currency}
              </h1>
            </GridItem>
            <GridItem col="1 / span 3" row="2">
              <LineChart
                width={graphWidth}
                height={graphHeight}
                data={data}
                style={{ marginTop: '1em' }}
              >
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="total" stroke="#009fff" />
              </LineChart>
            </GridItem>

            <GridItem col="1 / span 2" row="3" />
            <GridItem col="3" row="3">
              <Select
                firstOption="Convert Currency"
                data={currencyRates}
                onChange={e => this.convertDataToCurrency(e)}
              />
            </GridItem>
          </Grid>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  calculatedData: state.getIn(['calculator', 'calculatedData']),
  convertedData: state.getIn(['calculator', 'convertedData']),
  currencyRates: state.getIn(['graph', 'currencyRates']),
  currency: state.getIn(['graph', 'currency'])
});

export const mapDispatchToProps = dispatch => ({
  onGetCurrencyRates: currencies => dispatch(getCurrencyRates(currencies)),
  onSetCurrency: currency => dispatch(setCurrency(currency)),
  onSetConvertedData: data => dispatch(setConvertedData(data))
});

Graph.propTypes = {
  currency: PropTypes.string.isRequired,
  data: PropTypes.object,
  calculatedData: PropTypes.array,
  convertedData: PropTypes.array,
  currencyRates: PropTypes.object,
  onSetCurrency: PropTypes.func.isRequired,
  onGetCurrencyRates: PropTypes.func.isRequired,
  onSetConvertedData: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
