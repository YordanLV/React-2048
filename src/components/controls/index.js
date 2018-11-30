import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'

import { RESET } from '../../actionTypes';

const StyledControls = styled.div`
  bottom:10px;
  left:10px;
  position: fixed;
  display:block;
  button{
    padding:10px 20px;
    border: 5px solid #ba37f5;
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

//connects component with redux store state
const mapStateToProps = state => ({ boardMatrix: state.board.boardMatrix })
export default connect(mapStateToProps)(Controls);