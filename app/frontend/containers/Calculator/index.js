import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import request from 'superagent';

import Button from '../../components/Button';
import Form from '../../components/Form';
import NumericInput from '../../components/NumericInput';

import ButtonWrapper from './ButtonWrapper';
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

  processCalculatorResult(monthlyData) {
    const { onSetCalculatedData, onSetConvertedData } = this.props;

    const processedData = [];

    /* eslint-disable array-callback-return */
    monthlyData.map((amount, index) => {
      processedData.push({ month: index, totalAmount: amount });
    }, {});

    onSetCalculatedData(processedData);
    onSetConvertedData(processedData);
  }

  handleInputChange(e) {
    const { target } = e;
    const { name, value } = target;

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
          <NumericInput
            label="Base Amount"
            name="base"
            onChange={this.handleInputChange}
            symbol="€"
            alignSymbol="left"
            required
          />
          <NumericInput
            label="Regular Monthly Deposit"
            name="deposit"
            onChange={this.handleInputChange}
            symbol="€"
            alignSymbol="left"
            required
          />
          <NumericInput
            label="Annual Interest Rate"
            name="interest"
            onChange={this.handleInputChange}
            symbol="%"
            alignSymbol="right"
            required
          />
          <NumericInput
            label="Calculation Period"
            name="period"
            onChange={this.handleInputChange}
            symbol="years"
            alignSymbol="right"
            required
          />
          <ButtonWrapper>
            <Button color="Green" submit fill="true">
              {calculatedData.size > 0 ? (
                <Fragment>Recalculate</Fragment>
              ) : (
                <Fragment>Calculate</Fragment>
              )}
            </Button>
          </ButtonWrapper>
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

Calculator.propTypes = {
  calculatedData: PropTypes.object,
  onSetCalculatedData: PropTypes.func.isRequired,
  onSetConvertedData: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
