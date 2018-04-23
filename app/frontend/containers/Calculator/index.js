import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import request from 'superagent';

import Button from '../../components/Button';
import Form from '../../components/Form';
import Grid from '../../components/Grid';
import GridItem from '../../components/GridItem';
import NumericInput from '../../components/NumericInput';

import Wrapper from './Wrapper';

import { setCalculatedData, setConvertedData } from './actions';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    request
      .post('/calculator')
      .send(this.state) // sends a JSON post body
      .set('accept', 'json')
      .end((err, res) => {
        // Calling the end function will send the request
        this.processCalculatorResult(res.body);
      });
  }

  clearCalculator(e) {
    e.preventDefault();
    e.stopPropagation();

    this.state = {};
  }

  processCalculatorResult(monthlyData) {
    const { onSetCalculatedData, onSetConvertedData } = this.props;

    const processedData = [];

    monthlyData.map((amount, index) => {
      processedData.push({ month: index, totalAmount: amount });
    }, {});

    onSetCalculatedData(processedData);
    onSetConvertedData(processedData);
  }

  handleInputChange(e) {
    const { target } = e;
    const { id, name, type, value } = target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { calculatedData } = this.props;

    return (
      <Wrapper>
        <h1>Compound Interest Calculator</h1>
        <Form onSubmit={this.handleSubmit}>
          <Grid columns="2">
            <GridItem col="1 / span 2">
              <NumericInput
                label="Base Amount"
                name="base"
                onChange={this.handleInputChange}
                symbol="€"
                alignSymbol="left"
                required
              />
            </GridItem>
            <GridItem col="1 / span 2">
              <NumericInput
                label="Regular Monthly Deposit"
                name="deposit"
                onChange={this.handleInputChange}
                symbol="€"
                alignSymbol="left"
                required
              />
            </GridItem>
            <GridItem col="1 / span 2">
              <NumericInput
                label="Annual Interest Rate"
                name="interest"
                onChange={this.handleInputChange}
                symbol="%"
                alignSymbol="right"
                required
              />
            </GridItem>
            <GridItem col="1 / span 2">
              <NumericInput
                label="Calculation Period"
                name="period"
                onChange={this.handleInputChange}
                symbol="years"
                alignSymbol="right"
                required
              />
            </GridItem>
            <GridItem col="1">
              <Button submit fill="true">
                {calculatedData.size > 0 ? (
                  <Fragment>Recalculate</Fragment>
                ) : (
                  <Fragment>Calculate</Fragment>
                )}
              </Button>
            </GridItem>
            <GridItem col="2">
              <Button onClick={this.clearCalculator} fill="true">
                Clear
              </Button>
            </GridItem>
          </Grid>
        </Form>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  calculatedData: state.getIn(['calculator', 'calculatedData'])
});

export const mapDispatchToProps = dispatch => ({
  onSetCalculatedData: data => dispatch(setCalculatedData(data)),
  onSetConvertedData: data => dispatch(setConvertedData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
