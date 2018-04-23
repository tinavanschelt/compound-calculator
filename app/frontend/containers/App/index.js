import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Calculator from '../Calculator';
import Graph from '../../components/Graph';
import Grid from '../../components/Grid';
import GridItem from '../../components/GridItem';

class App extends Component {
  render() {
    return (
      <Grid custom="1fr 2fr">
        <GridItem>
          <Calculator className="Calculator" />
        </GridItem>
        <GridItem>
          <Graph data={this.props.calculatedData} />
        </GridItem>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  calculatedData: state.getIn(['calculator', 'calculatedData'])
});

App.propTypes = {
  calculatedData: PropTypes.string
};

export default connect(mapStateToProps)(App);
