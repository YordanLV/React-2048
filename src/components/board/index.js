import React from "react";
import { Swipe } from "react-swipe-component";
import styled, { createGlobalStyle } from "styled-components";
import { connect } from "react-redux";
import { uid } from "react-uid";
import theme from "../../theme";
import Row from "../row";
import {
  PRESS_UP,
  PRESS_RIGHT,
  PRESS_DOWN,
  PRESS_LEFT
} from "../../actionTypes";
import {
  FadeInUp,
  TiltUp,
  TiltRight,
  TiltDown,
  TiltLeft
} from "../../animations";

const { media, board } = theme;

const body = document.querySelector("body");

const BodyStyle = createGlobalStyle`
  body {
    @media (${media.md}) {
      overflow-x: hidden;
      overflow-y: hidden;
    }
  }
`;
const BoardWrapper = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: ${board.size};
  width: ${board.size};
  perspective: 40vw;
  animation: ${FadeInUp} 1s cubic-bezier(0.58, 0.09, 0.82, 0.93);

  @media (${media.md}) {
    height: ${board.sizeSm};
    width: ${board.sizeSm};
  }
`;

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tilt: "" };
    this.onSwipeLeftListener = this._onSwipeLeftListener.bind(this);
    this.onSwipeRightListener = this._onSwipeRightListener.bind(this);
    this.onSwipeDownListener = this._onSwipeUpListener.bind(this);
    this.onSwipeUpListener = this._onSwipeDownListener.bind(this);
    this.onSwipeListener = this._onSwipeListener.bind(this);
  }

  componentDidMount() {
    body.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    body.removeEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown(event) {
    switch (event.keyCode) {
      case 38:
        this.setState({ tilt: TiltUp });
        this.props.dispatch({ type: PRESS_UP });
        break;
      case 39:
        this.setState({ tilt: TiltRight });
        this.props.dispatch({ type: PRESS_RIGHT });
        break;
      case 40:
        this.setState({ tilt: TiltDown });
        this.props.dispatch({ type: PRESS_DOWN });
        break;
      case 37:
        this.setState({ tilt: TiltLeft });
        this.props.dispatch({ type: PRESS_LEFT });
        break;
      default:
        break;
    }
  }

  // Mobile Swiping Functionality
  _onSwipeUpListener() {
    this.setState({ tilt: TiltDown });
    this.props.dispatch({ type: PRESS_DOWN });
  }

  _onSwipeRightListener() {
    this.setState({ tilt: TiltRight });
    this.props.dispatch({ type: PRESS_RIGHT });
  }

  _onSwipeDownListener() {
    this.setState({ tilt: TiltUp });
    this.props.dispatch({ type: PRESS_UP });
  }

  _onSwipeLeftListener() {
    this.setState({ tilt: TiltLeft });
    this.props.dispatch({ type: PRESS_LEFT });
  }

  _onSwipeListener(e) {}

  render() {
    const StyledBoard = styled.div`
      position: absolute;
      transform-style: preserve-3d;
      animation: ${this.state.tilt} 0.3s ease-in-out 0s;
    `;
    const matrix = this.props.boardMatrix;
    return (
      <BoardWrapper>
        <BodyStyle />
        <Swipe
          nodeName="div"
          mouseSwipe={false}
          onSwipeEnd={this.onSwipeEnd}
          onSwipedLeft={this.onSwipeLeftListener}
          onSwipedRight={this.onSwipeRightListener}
          onSwipedDown={this.onSwipeDownListener}
          onSwipedUp={this.onSwipeUpListener}
          onSwipe={this.onSwipeListener}
        >
          <StyledBoard>
            {matrix.map((row, id) => (
              <Row key={uid(id)} row={row} />
            ))}
          </StyledBoard>
        </Swipe>
      </BoardWrapper>
    );
  }
}

const mapStateToProps = state => ({ boardMatrix: state.board.boardMatrix });
export default connect(mapStateToProps)(Board);
