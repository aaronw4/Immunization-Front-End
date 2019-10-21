import React from "react";
import styled from 'styled-components';
import introImg from './introImg.jpg';
import { Link } from "react-router-dom";


const IntroPg = styled.div`
    display:flex;
`;

const IntroCont = styled.div`
    max-width: 985px;
    margin-right: auto;
    margin-left: auto;
`;


const IntroBackground = styled.img`
    @media (max-width: 800px) {
        display: none;
    }
`;

const IntroHeader = styled.h2`
    font-family: Barlow;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    margin-top: 15px;
`;

const IntroImgCont = styled.div`
    max-width: 734px;
    max-height: 228px;
    overflow: hidden;
    margin: 57px auto 0 auto;
    border-radius: 200px;
    box-shadow: inset 0px 4px 15px rgba(0, 0, 0, 0.25);
    
    @media (max-width: 500px) {
        width: 333px;
        height: 150px;
    };
`;

const IntroImg = styled.img`
    max-width: 734px;
    margin-top: -100px;    

    @media (max-width: 500px) {
        max-width: 450px;
        margin-top: -50px;  
        margin-left: -30px; 
    };
`;

const IntroDesc = styled.p`
    font-family: Barlow;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 35px;
    width: 422px;
    margin: 72px auto 0 auto;
    text-align: left;

    @media (max-width: 500px) {
        width: 244px;
        font-size: 18px;
        line-height: 25px;
    }
`;

const IntroButton = styled.button`
    background: #87A9B0;
    border: 1px solid #527F89;
    box-sizing: border-box;
    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    padding: 16px 73px;
    margin-top: 56px;
`;

export default function IntroPage() {

    return(
      <IntroPg>
        <IntroBackground src={background}/>
        <IntroCont>
            <IntroHeader>ImmuTrack</IntroHeader>
            <IntroImgCont><IntroImg src={introImg}/></IntroImgCont>
            <IntroDesc>ImmuTrack gives parents the ability to track their children’s immunization records. Talk to your doctor to receive a code that will connect your account to your preferred office.</IntroDesc>
            <Link to="/login"><IntroButton>SIGN UP</IntroButton></Link>
        </IntroCont>
        <IntroBackground src={background}/>
      </IntroPg>
    )
}