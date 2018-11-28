import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'

import { RESET } from '../../actionTypes';

const StyledControls = styled.div`
  display:block;
`;

class Controls extends Component {

  reset = () => {
    this.props.dispatch({ type: RESET });
  }

  render() { 
    return ( 
      <StyledControls>
        <button onClick={this.reset}>Reset</button>
      </StyledControls>
    );
  }
}

//connects component with redux store state
const mapStateToProps = state => ({ boardMatrix: state.board.boardMatrix })
export default connect(mapStateToProps)(Controls);