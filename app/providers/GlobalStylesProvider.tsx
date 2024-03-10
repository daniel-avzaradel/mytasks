"use client";

import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const GlobalStyles = styled.div`
  display: flex;
  padding: 2.5rem;
  gap: 2.5rem;
  height: 100%;
`

const GlobalStylesProvider = ({ children }: Props) => {
  return <GlobalStyles>{children}</GlobalStyles>
};

export default GlobalStylesProvider;
