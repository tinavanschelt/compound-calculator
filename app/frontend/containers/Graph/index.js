import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

import Select from '../../components/Select';
import Grid from '../../components/Grid';
import GridItem from '../../components/GridItem';

import { getCurrencyRates } from './actions';
import { setConvertedData } from '../Calculator/actions';

let graphWidth;
let graphHeight;

class Graph extends Component {
  componentDidMount() {
    graphWidth = this.containerRef.clientWidth - 100;
    graphHeight = this.containerRef.clientHeight - 100;

    if (graphHeight < 200) {
      graphHeight = 200;
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
    const { value } = target;

    const { onSetConvertedData, calculatedData } = this.props;

    if (value !== 'default') {
      if (value === '-1') {
        onSetConvertedData(calculatedData);
      } else {
        const convertedData = [];

        /* eslint-disable array-callback-return */
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
    const { data, currencyRates } = this.props;
    return (
      <div
        ref={element => {
          this.containerRef = element;
        }}
        style={{ width: '100%', height: '100%', padding: '1em' }}
      >
        {/* Used div instead of Fragment in order to be able to use ref 
            (ref slightly more complicated on a styled-component) */}
        {data.length > 0 && (
          <Grid>
            <GridItem col="1" row="1">
              <Select
                firstOption="Convert Currency"
                data={currencyRates}
                onChange={e => this.convertDataToCurrency(e)}
              />
            </GridItem>
            <GridItem col="2" row="1">
              Show conversion
            </GridItem>

            <GridItem col="1 / span 2" row="2">
              <LineChart width={graphWidth} height={graphHeight} data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="totalAmount" stroke="#20a36f" />
              </LineChart>
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
  currencyRates: state.getIn(['graph', 'currencyRates'])
});

export const mapDispatchToProps = dispatch => ({
  onGetCurrencyRates: currencies => dispatch(getCurrencyRates(currencies)),
  onSetConvertedData: data => dispatch(setConvertedData(data))
});

Graph.propTypes = {
  data: PropTypes.object,
  calculatedData: PropTypes.array,
  convertedData: PropTypes.array,
  currencyRates: PropTypes.object,
  onGetCurrencyRates: PropTypes.func.isRequired,
  onSetConvertedData: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
