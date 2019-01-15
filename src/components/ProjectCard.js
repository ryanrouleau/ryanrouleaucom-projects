import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 400px;
  border: 1px solid #DADCE0;
  border-radius: 6px;
  font-size: 12px;
  transition: 1s;
`;

const CardTitle = styled.div`

`;

const DescriptionList = styled.ul`

`;

const Link = styled.a`

`;

const ProjectCard = props => {

  return (
    <CardContainer>
      <CardTitle>{props.title}</CardTitle>
      <DescriptionList>
        { props.descriptions.map(description => <li key={description}>{ description }</li>) }
      </DescriptionList>
      <Link href={props.link}>{props.link}</Link>
    </CardContainer>
  );
};

export default ProjectCard;