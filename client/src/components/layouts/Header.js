import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <MainContainer>
      <h1>
        Welcome to the <br /> MERN Stack Blog
      </h1>
    </MainContainer>
  );
}

// Main container
const MainContainer = styled.header`
  background: url("/images/header-bg.jpg") no-repeat center/cover;
  height: 25rem;
  color: #fff;

  h1 {
    transform: translate(-50%, -50%);
    font-weight: 900;
    position: absolute;
    top: 25%;
    left: 50%;
  }
`;

export default Header;
