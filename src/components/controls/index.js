import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'

import { RESET } from '../../actionTypes';

const StyledControls = styled.div`
  bottom: 1rem;
  left: 1rem;
  position: fixed;
  display: block;
  button{
    font-size: 1.6rem;
    padding: 1rem 2rem;
    border: .5rem solid #ba37f5;
    background-color: rgba(186, 55, 245, .3);
    font-family: 'Orbitron', sans-serif;
    font-weight: 600;
    color: white;
    cursor: pointer;
    &:hover{
      background-color: rgba(186, 55, 245, .9);
    }
  }
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

const mapStateToProps = state => ({ boardMatrix: state.board.boardMatrix })
export default connect(mapStateToProps)(Controls);