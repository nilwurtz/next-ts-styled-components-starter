import { NextPage } from 'next';
import React, { useState } from 'react';
import styled from 'styled-components';

const Index: NextPage = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (): void => {
    setClicked(!clicked);
  };

  return (
    <Root onClick={handleClick}>
      <IndexTitle clicked={clicked}>Hello! World!</IndexTitle>
    </Root>
  );
};

const Root = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IndexTitle = styled.div<{ clicked: boolean }>`
  color: ${({ clicked }): string => (clicked ? "red" : "blue")};
  font-size: 5rem;
`;

export default Index;
