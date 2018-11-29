import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledMessage = styled.div`
  position:fixed;
  font-family: 'Orbitron', sans-serif;
  color: white;
  font-size:16px;
  bottom:10px;
  left:50%;
  transform: translateX(-50%);
  text-align:center;
`;
const winnerMessage = ({ isWinner }) => (
  <StyledMessage>
    {isWinner && <span>You Win! Keep playing for high score!</span>}
  </StyledMessage>
);


//connects component with redux store state
const mapStateToProps = state => ({ isWinner: state.board.isWinner })
export default connect(mapStateToProps)(winnerMessage);