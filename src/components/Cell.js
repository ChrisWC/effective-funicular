import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledCellElement = styled.div`
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.16);
  background: ${props => props.fibNum
      ?"green"
      :props.valueChanged
      ?"yellow"
      :"white"
  };
  place-self: center;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.72);
  transition: 0.72s all;
`;

function Cell({children, ...props}, ...other) {
  const [value, setValue] = useState(children);
  const [valueChanged, setValueChanged] = useState(false);

  useEffect(() => {
    if (children !== value) {
      setValue(children);
      setValueChanged(true);
    } else {
      setTimeout(() => setValueChanged(false), 1000);
    }
  });

  return (
    <StyledCellElement
      {...props}
      valueChanged={valueChanged}
    >
      {children}
    </StyledCellElement>
  );
}

export default Cell;;
