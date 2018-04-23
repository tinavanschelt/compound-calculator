import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Calculator from '../Calculator';
import Graph from '../Graph';
import Grid from '../../components/Grid';
import GridItem from '../../components/GridItem';

class App extends Component {
  render() {
    const { calculatedData } = this.props;

    return (
      <Grid custom="1fr 2fr">
        <GridItem>
          <Calculator className="Calculator" />
        </GridItem>
        <GridItem>
          <Graph data={calculatedData} />
        </GridItem>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  calculatedData: state.getIn(['calculator', 'calculatedData'])
});

App.propTypes = {
  calculatedData: PropTypes.array
};

export default connect(mapStateToProps)(App);
