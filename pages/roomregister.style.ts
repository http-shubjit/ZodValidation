// roomregister.style.js
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

export const Container = styled.div`
  height: 620px;
  width: 641px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Heading = styled.div`
  width: 100%;
  height: 20px;
  align-items: center;
  display: flex;
  position: relative;
  justify-content: space-between;
  margin: 20px 10px;

  h1 {
    font-family: "sans-serif";
    font-size: 26px;
    /* Add any additional styles you want for h1 */
  }
`;
