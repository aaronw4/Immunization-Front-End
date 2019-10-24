import React from "react";
import styled from 'styled-components';

const FooterCont = styled.div`
    position: fixed;
    bottom: 0;
    width: 99vw;
    height: 75px;
    margin_left: -1%
    background-color: #7E7E7E;

    @media (max-width: 500px) {
        margin-left: -2%;
    }
`;

const FooterLeft = styled.div`
    display: flex;
    float: left;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

const FooterRight = styled.div`
    float: right;
    margin-right: 5%;
`;

const FooterAnchor = styled.a`
    width: 120px;
    padding-top: 10%;
    text-decoration: none;
    color: black;
    Font Family: Barlow;
    Font Style: Regular;
    Font Size: 15px;
    Line Height: 18px;    
    margin-left: 5%;
`;

const FooterName = styled.p`
    padding-top: 5%;
    Font Family: Barlow;
    Font Style: Regular;
    Font Size: 15px;
    Line Height: 18px; 
`;

export default function Footer() {

    return(
        <FooterCont>
            <FooterLeft>
                <FooterAnchor href='#'>Privacy Policy</FooterAnchor>
                <FooterAnchor href='#'>Contact Us</FooterAnchor>
            </FooterLeft>
            <FooterRight>
                <FooterName>@ImmuTrack</FooterName>
            </FooterRight>
        </FooterCont>

    )
}