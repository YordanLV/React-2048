import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import Button from '../button';
import { RESET } from '../../actionTypes';

const StyledControls = styled.div`
  bottom: 1rem;
  left: 1rem;
  position: fixed;
  display: block;
`;

class Controls extends PureComponent {

  reset = () => {
    this.props.dispatch({ type: RESET });
  }

  render() {
    return (
      <StyledControls>
        <Button onClick={this.reset} label="Reset" />
      </StyledControls>
    );
  }
}

const mapStateToProps = state => ({ boardMatrix: state.board.boardMatrix })
export default connect(mapStateToProps)(Controls);