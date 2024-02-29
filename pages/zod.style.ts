// StyledComponents.tsx
import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
`;

export const StyledLabel = styled.label`
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  transition: border 0.3s;

  &:hover {
    border: 1px solid #666;
  }
`;

export const StyledSelect = styled.select`
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  transition: border 0.3s;

  &:hover {
    border: 1px solid #666;
  }
`;

export const StyledButton = styled.button`
  background: blue;
  color: white;
  padding: 12px;
  cursor: pointer;
  border: none;
  transition: background 0.3s;

  &:hover {
    background: darkblue;
  }
`;
