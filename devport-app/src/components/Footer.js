import React, { Component } from "react";
import styled from "styled-components";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-scroll";
import "../styles/iconStyles.css";

const VersionContainer = styled.div`
  width: 100vw;
  align-items: center;
  justify-content: center;
  color: #98e342;
  text-align: center;
  background-color: #121417;
  padding: 1vh 0 1vh 0;
`;

const FooterContainer = styled.div`
  text-align: center;
`;

const IconStyle = () => {
  return {
    fontSize: "calc(15px + 2vmin)",
    color: "white",
    margin: 20,
  };
};

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <Link
          activeClass="active"
          to="Header"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <IconButton
            className={"icon"}
            style={{ backgroundColor: "transparent" }}
          >
            <ExpandLessIcon className={"icon"} style={IconStyle()} />
          </IconButton>
        </Link>
        <VersionContainer>
          <div>2020 - v1.0 by Luis Trujillo</div>
        </VersionContainer>
      </FooterContainer>
    );
  }
}

export default Footer;
