import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'

import Row from '../row';

import { PRESS_UP, PRESS_RIGHT, PRESS_DOWN, PRESS_LEFT } from '../../actionTypes';
import { FadeInUp, TiltUp, TiltRight, TiltDown, TiltLeft } from '../../animations';

const body = document.querySelector('body');

const BoardWrapper = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
  perspective: 200px;
  animation: ${FadeInUp} 1.5s ease-out;
`;

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tilt: '' };
  }

  componentDidMount() {
    body.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    body.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handleKeyDown(event) {
    switch (event.keyCode) {
      case 38:
        this.setState({ tilt: TiltUp });
        this.props.dispatch({ type: PRESS_UP })
        break;
      case 39:
        this.setState({ tilt: TiltRight });
        this.props.dispatch({ type: PRESS_RIGHT })
        break;
      case 40:
        this.setState({ tilt: TiltDown });
        this.props.dispatch({ type: PRESS_DOWN })
        break;
      case 37:
        this.setState({ tilt: TiltLeft });
        this.props.dispatch({ type: PRESS_LEFT })
        break;
      default:
        break;
    }
  }
  render() {
    const StyledBoard = styled.div`
      position: absolute;
      transform-style: preserve-3d;
      animation: ${this.state.tilt} 0.3s ease-in-out 0s;
    `;
    const matrix = this.props.boardMatrix;
    return (
      <BoardWrapper>
        <StyledBoard>
          {matrix.map((row, idx) => <Row key={idx} row={row} />)}
        </StyledBoard>
      </BoardWrapper>
    );
  }
}

//connects component with redux store state
const mapStateToProps = state => ({ boardMatrix: state.board.boardMatrix })
export default connect(mapStateToProps)(Board);