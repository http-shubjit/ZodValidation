// roomregister.style.ts

import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc; /* Added border for visibility */
  border-radius: 4px;
  width: 200px; /* Adjust width as needed */
`;

export const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
