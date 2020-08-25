import React, { Component } from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100vw;
  align-items: center;
  justify-content: center;
  color: #98e342;
  text-align: center;
  background-color: #121417;
  padding: 1vh 0 1vh 0;
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <div>2020 - v1.0 by Luis Trujillo</div>
      </FooterContainer>
    );
  }
}

export default Footer;
