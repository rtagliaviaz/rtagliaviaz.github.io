import React from "react";
import styled from "styled-components";

import breakpoints from "../../Commons/breakpoints";

const Technologies = styled.div`
    display: flex;
    flex-direction: column;
    background: #08cda7;
    width: 5%;
    align-items: center;
    margin-right: 60px;
    height: 18%;
    border-radius: 5px;
    
    @media only screen and ${breakpoints.device.xs} {
      display: none;
    }

    @media only screen and ${breakpoints.device.sm} {
      display: flex;
      width: 10%;
    }
    @media only screen and ${breakpoints.device.lg} {
      display: flex;
      width: 5%;
    }
  `;

  const Tech = styled.div`
    margin: 20px 0;
    
    display: flex;
    @media only screen and ${breakpoints.device.xs} {
    }

    @media only screen and ${breakpoints.device.sm} {
    }
    @media only screen and ${breakpoints.device.lg} {
    }
  `;

  const TechIcon = styled.img`
    cursor: pointer;
    @media only screen and ${breakpoints.device.xs} {
      width: 28px;
      height: 28px;
    }

    @media only screen and ${breakpoints.device.sm} {
      width: 40px;
      height: 40px;
    }
    @media only screen and ${breakpoints.device.lg} {
      
      width: 40px;
      height: 40px;
      transition: 0.3s;
      &:hover{
        width: 44px;
        height: 44px;
      }
    }
  `;

const Techs = () => {
  const techs = [
    { name: 'Linkedin', icon: "../icons/linkedin.png", link: 'https://www.linkedin.com/in/robert-t-0ab1781a4/'},
    { name: 'DevTo', icon: "../icons/dev-black.png", link: 'https://dev.to/rtagliavia/'},
    { name: "github", icon: "../icons/github.png", link: 'https://github.com/rtagliaviaz' },
  ];

  


  return (
    <Technologies>
      {techs.map((tech, index) => (
        <Tech key={index}>
          <TechIcon src={tech.icon} alt='' onClick={
            () => window.open(tech.link, '_blank')
          }/>
        </Tech>
      ))}
    </Technologies>
  );
};

export default Techs;
