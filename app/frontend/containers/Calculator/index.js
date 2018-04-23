import React, { Component } from 'react';
import { connect } from 'react-redux';
import request from 'superagent';

import Button from '../../components/Button';
import Form from '../../components/Form';
import NumericInput from '../../components/NumericInput';

import Wrapper from './Wrapper';

import { setCalculatedData } from './actions';

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

  processCalculatorResult(monthlyData) {
    const { onSetCalculatedData } = this.props;

    const processedData = [];

    monthlyData.map((amount, index) => {
      processedData.push({ month: index, totalAmount: amount });
    }, {});

    onSetCalculatedData(processedData);
  }

  handleInputChange(e) {
    const { target } = e;
    const { id, name, type, value } = target;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Wrapper>
        <h1>Compound Interest Calculator</h1>
        <Form>
          <NumericInput
            label="Base Amount"
            name="base"
            onChange={this.handleInputChange}
            symbol="€"
            alignSymbol="left"
          />
          <NumericInput
            label="Regular Monthly Deposit"
            name="deposit"
            onChange={this.handleInputChange}
            symbol="€"
            alignSymbol="left"
          />
          <NumericInput
            label="Interest Rate"
            name="interest"
            onChange={this.handleInputChange}
            symbol="%"
            alignSymbol="right"
          />
          <NumericInput
            label="Period"
            name="period"
            onChange={this.handleInputChange}
            symbol="years"
            alignSymbol="right"
          />
          <Button onClick={this.handleSubmit} fill="true">
            Calculate Interest Rate
          </Button>
        </Form>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
  onSetCalculatedData: data => dispatch(setCalculatedData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
