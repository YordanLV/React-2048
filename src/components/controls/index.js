import React, { Component } from 'react';
import styled from 'styled-components';

const StyledControls = styled.div`
  display:block;
`;

class Controls extends Component {
  render() { 
    let row = this.props.row;
    return ( 
      <StyledControls>
        <button>Reset</button>
      </StyledControls>
    );
  }
}
 
export default Controls;