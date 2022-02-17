import React, { CSSProperties } from "react";
import styled from "styled-components/macro";

import { ButtonType } from "./types";
import { getStyle } from "./utils";

export const Wrapper = styled.button(({$style}: {$style: CSSProperties}) => `
  padding: 8rem 20rem;
  background: ${$style.background};
  color: ${$style.color};

  border: none;
  border-color: ${$style.borderColor};
  border-radius: 2rem;
  outline: none;
  cursor: pointer;

  &:disabled {
    cursor: no-drop;
  }
`);

export default ({
  children,
  type = "primary",
  onClick,
  disabled = false,
}: {
  children: string;
  type?: ButtonType;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
}) => {

  const style = getStyle(type);

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();
    onClick && onClick(e);
  }

  return (
    <Wrapper onClick={handleClick} disabled={disabled} $style={style}>
      {children}
    </Wrapper>
  );
};
