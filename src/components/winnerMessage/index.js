import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledMessage = styled.div`
  position:fixed;
  font-family: 'Orbitron', sans-serif;
  color: white;
  font-size: 2rem;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;
const winnerMessage = ({ isWinner }) => (
  <StyledMessage>
    {isWinner && <span>You Win! Keep playing for high score!</span>}
  </StyledMessage>
);

const mapStateToProps = state => ({ isWinner: state.board.isWinner })
export default React.memo(connect(mapStateToProps)(winnerMessage));