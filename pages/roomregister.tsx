// pages/index.tsx
import React, { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input<{ error: boolean }>`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid ${({ error }) => (error ? "red" : "#ccc")};
  border-radius: 4px;
`;

const StyledButton = styled.button<{ error: boolean }>`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: 1px solid ${({ error }) => (error ? "red" : "#ccc")};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const RoomRegister = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleButtonClick = () => {
    if (!inputValue.trim()) {
      setError(true);
    } else {
      setError(false);
      // Perform other actions here if needed
    }
  };

  return (
    <StyledContainer>
      <FormContainer>
        <label>
          Enter a value:
          <StyledInput
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            error={error}
          />
        </label>
        <StyledButton error={error} onClick={handleButtonClick}>
          Submit
        </StyledButton>
        {error && <ErrorMessage>Please enter a value</ErrorMessage>}
      </FormContainer>
    </StyledContainer>
  );
};

export default RoomRegister;
