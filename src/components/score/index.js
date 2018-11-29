import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledScored = styled.div`
  position:absolute;
  top:10px;
  left:10px;
  font-family: 'Orbitron', sans-serif;
  color: white;
  font-size:16px;
`;

const Score = ({ score }) => (
  <StyledScored>
    Score: {score}
  </StyledScored>
);

const mapStateToProps = state => ({ score: state.board.score })
export default connect(mapStateToProps)(Score);