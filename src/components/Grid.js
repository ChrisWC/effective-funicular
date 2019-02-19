import React, { useState } from 'react';
import styled from 'styled-components';

function Grid({className, cells, width, height, initialize, handleCellClick, cellComponent}) {
  let [ initialized, setInitialized ] = useState(false);

  const Cell = cellComponent;
  if (!initialized) {
    setInitialized(true);
    initialize([width, height]);
  }

  return (
    <div
      className={className}>
    {
      Cell && cells.map(({key, row, column, value, fibNum}) => {
        return (
          <Cell
            onClick={() => handleCellClick([column, row])}
            column={column}
            fibNum={fibNum}
            row={row}
            index={key}
            key={key}>
            {value}
          </Cell>
        );
      })
    }
    </div>
  );
}

const StyledGrid = styled(Grid)`
  background-color: #282c34;
  padding: 16px;
  justify-content: center;
  display: inline-grid;
  grid-template-columns: repeat(${props => props.width}, 64px);
  grid-template-rows: repeat(${props => props.height}, 64px);
  grid-auto-row: 1fr;
  grid-auto-column: 1fr;
  min-width: 100%;
  min-height: 100%;
  align-content: center;
`;

export default StyledGrid;
