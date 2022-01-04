import React from "react";
import styled from "styled-components";
import breakpoints from "../../Commons/breakpoints";

//styled components

const ProjectsContainer = styled.div`
    width: 100%;
    margin: 0 auto;

    @media only screen and ${breakpoints.device.xs} {
    }
    @media only screen and ${breakpoints.device.sm} {
    }
    @media only screen and ${breakpoints.device.lg} {
    }
  `;

  const ProjectContainer = styled.div`
    @media only screen and ${breakpoints.device.xs} {
      margin-top: 40px;
    }
    @media only screen and ${breakpoints.device.sm} {
    }
    @media only screen and ${breakpoints.device.lg} {
    }
  `;

  const ProjectsContainerTitle = styled.h2`
    color: #08cda7;
    font-weight: 400;
    text-align: center;

    @media only screen and ${breakpoints.device.xs} {
      font-size: 24px;
    }
    @media only screen and ${breakpoints.device.sm} {
      font-size: 28px;
    }
    @media only screen and ${breakpoints.device.lg} {
      font-size: 38px;
    }
  `;

  const ProjectTitle = styled.h3`
    color: #08cda7;
    width: 90%;
    @media only screen and ${breakpoints.device.xs} {
      font-size: 18px;

      margin: 10px auto;
    }
    @media only screen and ${breakpoints.device.sm} {
      margin: 20px auto;
    }
    @media only screen and ${breakpoints.device.lg} {
      font-size: 26px;
      margin: 20px auto;
    }
  `;

  const ProjectImageAndDescription = styled.div`
    display: flex;
    justify-content: space-between;

    @media only screen and ${breakpoints.device.xs} {
    }
    @media only screen and ${breakpoints.device.sm} {
    }
    @media only screen and ${breakpoints.device.lg} {
    }
  `;
  const ProjectDescription = styled.div`
    @media only screen and ${breakpoints.device.xs} {
      width: 90%;
      margin: 0 auto;
    }
    @media only screen and ${breakpoints.device.sm} {
    }
    @media only screen and ${breakpoints.device.lg} {
    }
  `;
  const ProjectDescriptionText = styled.div`
    color: #fff;

    @media only screen and ${breakpoints.device.xs} {
      font-size: 14px;
      line-height: 1.5;
    }
    @media only screen and ${breakpoints.device.sm} {
      font-size: 18px;
      line-height: 1.6;
    }
    @media only screen and ${breakpoints.device.lg} {
    }
  `;

  const ProjectButtons = styled.div`
   
    display: flex;
    justify-content: space-between;
    @media only screen and ${breakpoints.device.xs} {
      width: 30%;
      font-size: 14px;
    }
    @media only screen and ${breakpoints.device.sm} {
      font-size: 18px;
    }
    @media only screen and ${breakpoints.device.lg} {
      width: 10%;
      font-size: 22px;
    }
  `;
  const ProjectButton = styled.a`
    color: #08cda7;
  `;
  const ProjectTechnologiesTitle = styled.p`
    color: #08cda7;

    @media only screen and ${breakpoints.device.xs} {
      font-size: 14px;
    }
    @media only screen and ${breakpoints.device.sm} {
      font-size: 18px;
    }
    @media only screen and ${breakpoints.device.lg} {
      font-size: 20px;
    }
  `;
  const ProjectDescriptionIcons = styled.div`
    margin: 10px 0;
    @media only screen and ${breakpoints.device.xs} {
    }
    @media only screen and ${breakpoints.device.sm} {
    }
    @media only screen and ${breakpoints.device.lg} {
    }
  `;
  const ProjectIcons = styled.div`
    margin: 4px 0;

    @media only screen and ${breakpoints.device.xs} {
    }
    @media only screen and ${breakpoints.device.sm} {
    }
    @media only screen and ${breakpoints.device.lg} {
    }
  `;

  const ProjectIcon = styled.img`
    @media only screen and ${breakpoints.device.xs} {
      margin-right: 10px;
      width: 30px;
    }
    @media only screen and ${breakpoints.device.sm} {
      width: 40px;
    }
    @media only screen and ${breakpoints.device.lg} {
      width: 60px;
    }
  `;

const Projects = () => {
  
  const projects = [
    {
      name: "Video Games Backlog",
      description:
        "App in which the user can search video games by title and add them to the backlog, in the backlog section the user can see the added titles, filter them by name and delete them from the list.",
      icons: [
        "../icons/react.png",
        "../icons/nodejs.png",
        "../icons/mongo.png",
      ],
      links: {
        demo: "http://rtagliaviaz.github.io/react-games-backlog",
        repo: "https://github.com/rtagliaviaz/react-games-backlog",
      },
    },
    {
      name: "Pokedex",
      description:
        "App in which the user can search pokemons, get details about them, filter the search by area.",
      icons: ["../icons/react.png"],
      links: {
        demo: "https://rtagliaviaz.github.io/react-pokedex/",
        repo: "https://github.com/rtagliaviaz/react-pokedex",
      },
    },
    {
      name: "Movie Database",
      description:
        "App in which users can look for movies nad view details like director, cast, year, etc.",
      icons: ["../icons/react.png"],
      links: {
        demo: "https://rtagliaviaz.github.io/React-OMDB/",
        repo: "https://github.com/React-OMDB/",
      },
    },
    {
      name: "Whatsapp Clone",
      description:
        "App created in order to put into practice some knowledge where the whatsapp web application is recreated, but with inorganic users who respond with simple messages.",
      icons: ["../icons/react.png"],
      links: {
        demo: "http://rtagliaviaz.github.io/react-whatsapp-clone",
        repo: "https://github.com/rtagliaviaz/react-whatsapp-clone/tree/main",
      },
    },
  ];

  return (
    <ProjectsContainer>
      <ProjectsContainerTitle>Projects</ProjectsContainerTitle>
      {projects.map((project, index) => (
        <ProjectContainer key={project.name}>
          <ProjectTitle>{project.name}</ProjectTitle>
          <ProjectImageAndDescription>
            <ProjectDescription>
              <ProjectDescriptionText>
                {project.description}
              </ProjectDescriptionText>
              <ProjectDescriptionIcons>
                <ProjectButtons>
                  <ProjectButton href={project.links.repo} target='_blank'>
                    Repo
                  </ProjectButton>
                  <ProjectButton href={project.links.demo} target='_blank'>
                    Demo
                  </ProjectButton>
                </ProjectButtons>

                <ProjectTechnologiesTitle>
                  Technologies
                </ProjectTechnologiesTitle>
                <ProjectIcons>
                  {project.icons.map((icon, index) => (
                    <ProjectIcon key={index} src={icon} alt='' />
                  ))}
                </ProjectIcons>
              </ProjectDescriptionIcons>
            </ProjectDescription>
          </ProjectImageAndDescription>
        </ProjectContainer>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
