import React from 'react';
import styled from 'styled-components';

import Cell from '../cell';

const StyledRow = styled.div`
  display:flex;
  background-color: rgba(0, 0, 0, 0.4); 
`;


const Row = ({ row }) => (
  <StyledRow>
    {row.map((val, id) => <Cell key={id} val={val} />)}
  </StyledRow>
);

export default React.memo(Row);