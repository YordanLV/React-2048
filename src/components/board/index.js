import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import theme from '../../theme';

import Row from '../row';

import { PRESS_UP, PRESS_RIGHT, PRESS_DOWN, PRESS_LEFT } from '../../actionTypes';
import { FadeInUp, TiltUp, TiltRight, TiltDown, TiltLeft } from '../../animations';

const {media, board} = theme;

const body = document.querySelector('body');

const BoardWrapper = styled.div`
  margin: 0 auto;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  height: ${board.size};
  width: ${board.size};
  perspective: 40vw; 
  animation: ${FadeInUp} 1s cubic-bezier(.58,.09,.82,.93);

  @media (${media.md}) {
    height: ${board.sizeSm};
    width: ${board.sizeSm};
  }
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