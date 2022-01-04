import React from "react";
import styled, { keyframes } from "styled-components";
import { slideInLeft, fadeInRight } from "react-animations";

import breakpoints from '../../Commons/breakpoints'

const slideinleft = keyframes`${slideInLeft}`;
  const fadeinright = keyframes`${fadeInRight}`;
//styled components
const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    
    @media only screen and ${breakpoints.device.xs}{
      flex-direction: column;
      align-items: center;
      height: 180px;
      justify-content: center;
    }

    @media only screen and ${breakpoints.device.sm}{
      flex-direction: row;
      align-items: center;
      height: 180px;
    }

    @media only screen and ${breakpoints.device.lg}{
      height: 300px;
      width: 80%;
      justify-content: space-around;
      margin: 0 auto;
    }
  `

  const HeaderTitle = styled.div`
    animation: 1s ${slideinleft};
    align-self: center;
    text-align: center;
    color: #08cda7;
   
    @media only screen and ${breakpoints.device.xs}{
      font-size: 24px;
      width: 100%;
      
    }

    @media only screen and ${breakpoints.device.sm}{
      font-size: 30px;
      width: 50%;
    }

    @media only screen and ${breakpoints.device.lg}{
      font-size: 60px;
      width: 25%;
    }
  `;

  const HeaderDescription = styled.p`
    animation: 1s ${fadeinright};
    width: 700px;
    line-height: 40px;
    color: #fff;

    @media only screen and ${breakpoints.device.xs}{
      line-height: 1.5;
      width: 90%;
      font-size: 14px;
    }
    @media only screen and ${breakpoints.device.sm}{
      font-size: 20px;
      width: 100%;
    }
    @media only screen and ${breakpoints.device.lg}{
      font-size: 24px;
      width: 60%;
    }
  `;


const Header = () => {
  

  
  return (
    <HeaderContainer>
      <HeaderTitle>Robert Tagliavia</HeaderTitle>
      <HeaderDescription>
        Hi there, my name is Robert, i'm a self-taught Web Developer, i'm always trying to learn new technologies and making new projects to practice my knowledges.

      </HeaderDescription>
    </HeaderContainer>
  );
};

export default Header;
