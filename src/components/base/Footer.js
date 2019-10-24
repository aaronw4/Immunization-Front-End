import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5vh;
  padding: 20px 50px;
  background: #7e7e7e;
  font-family: "Barlow";
  font-size: 15px;
  z-index: 100;
  @media (max-width: 599px) {
    height: 10vh;
  }
`;

const LeftDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  @media (max-width: 599px) {
    flex-direction: column;
  }
`;

export default function Footer() {
  return (
    <footer>
      <Container component="footer">
        <LeftDiv>
          <NavLink
            style={{ color: "#000", textDecoration: "none" }}
            to="/privacy-policy"
          >
            Privacy Policy
          </NavLink>
          <NavLink
            style={{ color: "#000", textDecoration: "none" }}
            to="/contact"
          >
            Contact Us
          </NavLink>
        </LeftDiv>
        <div>&#64;ImmuTrack</div>
      </Container>
    </footer>
  );
}
