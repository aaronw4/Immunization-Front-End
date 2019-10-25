import React from "react";
import styled from "styled-components";
import introImg from "./introImg.jpg";
import { Link } from "react-router-dom";

const IntroCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 90vh;
  width: 60%;
  margin: 0 auto;
  /* padding: 20px; */
  background: #f2f2f2;
  @media (max-width: 959px) {
    width: 90%;
  }
  @media (max-width: 599px) {
    width: 100%;
  }
`;

const IntroImgCont = styled.div`
  max-width: 734px;
  width: 734px;
  max-height: 228px;
  height: 228px;
  background-image: url(${introImg});
  background-size: 734px;
  background-position-y: -100px;
  background-repeat: no-repeat;
  border-radius: 200px;
  box-shadow: inset 0px 4px 15px rgba(0, 0, 0, 0.25);
  @media (max-width: 1230px) {
    max-width: 525px;
    max-height: 155px;
    background-size: 100%;
    background-position-y: -65px;
  }
  @media (max-width: 550px) {
    max-width: 90%;
    max-height: 150px;
    background-position-y: -55px;
  }
  @media (max-width: 480px) {
    max-height: 125px;
    background-position-y: -35px;
  }
  @media (max-width: 370px) {
    max-height: 125px;
    background-position-y: -15px;
  }
`;

const IntroDesc = styled.p`
  font-family: Barlow;
  font-size: 25px;
  line-height: 35px;
  width: 422px;
  padding: 20px;
  text-align: left;

  @media (max-width: 500px) {
    width: 70%;
    font-size: 18px;
    line-height: 25px;
  }
`;

const IntroButton = styled.button`
  background: #87a9b0;
  border: 1px solid #527f89;
  box-sizing: border-box;
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  padding: 16px 73px;
`;

export default function IntroPage() {
  return (
    <IntroCont>
      <IntroImgCont />
      <IntroDesc>
        ImmuTrack gives parents the ability to track their children’s
        immunization records. Talk to your doctor to receive a code that will
        connect your account to your preferred office.
      </IntroDesc>
      <Link to="/patient-register">
        <IntroButton>SIGN UP</IntroButton>
      </Link>
    </IntroCont>
  );
}
