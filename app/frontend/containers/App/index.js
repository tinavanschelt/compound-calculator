import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Calculator from '../Calculator';
import Graph from '../Graph';
import Grid from '../../components/Grid';
import GridItem from '../../components/GridItem';

class App extends Component {
  render() {
    const { convertedData } = this.props;

    return (
      <Grid custom="1fr 2fr">
        <GridItem>
          <Calculator className="Calculator" />
        </GridItem>
        <GridItem>
          <Graph data={convertedData} />
        </GridItem>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  convertedData: state.getIn(['calculator', 'convertedData'])
});

App.propTypes = {
  convertedData: PropTypes.array
};

export default connect(mapStateToProps)(App);
