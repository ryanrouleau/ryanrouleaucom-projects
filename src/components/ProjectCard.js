import React from 'react';
import styled from 'styled-components';

import Tag from './Tag';
import ArrowImg from '../img/arrow.png';

const CardContainer = styled.div`
  width: 400px;
  border: 1px solid #DADCE0;
  border-radius: 8px;
  font-size: 12px;
  transition: 0.4s;
  padding: 16px 24px 10px 24px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  background: #fff;
`;

const CardTitle = styled.span`
  font-family: 'Raleway';
  font-weight: 700;
  font-size: 18px;
  color: #474747;
  background: #fff;
  padding-right: 6px;
  text-decoration: none !important;
`;

const Date = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: rgba(0,0,0,0.4);
  padding-top: 1px;
  background: #fff;
`;

const Description = styled.p`
  margin-top: 12px;
  font-size: 14x;
  line-height: 150%;
`;

const SmallerTag = styled(Tag)`
  position: relative;
  z-index: 4;
  margin: 0px 6px 6px 0px;
  padding: 3px 6px;
  font-size: 9px;
  ${({ active }) => active && `
    border: 1px solid transparent;
  `}
`;

const Divider = styled.div`
  width: 10%;
  height: 1px;
  background: #DADCE0;
  margin: 8px 0 14px 0;
`;

const Arrow = styled.img`
  position: absolute;
  margin-left: 370px;
  margin-top: 10px;
  transform: rotate(-45deg);
  opacity: 0.3;
  width: 20px;
  height: 20px;
  transition: 0.3s ease;
  z-index: 3;
  opacity: 0.1;
`;

const Link = styled.a`
  position: absolute;
  z-index: 1;
  font-size: 12px;
  transition: 0.3s ease;
  opacity: 0;
  margin-left: 18px;
  text-decoration: none;
  color: rgba(0,0,0,0.6);
  width: 320px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    color: rgba(0,0,0,0.85);
  }
`;

const OuterContainer = styled.a`
  display: block;
  position: relative;
  z-index: 1;
  width: 400px;
  margin: 0px 16px 8px 16px;
  padding-top: 26px;
  text-decoration: none;

  &:hover {
    ${CardContainer} {
      box-shadow: 0 1px 2px 0 rgba(60,64,67,0.30), 0 1px 3px 1px rgba(60,64,67,0.15);
    }
    ${Arrow} {
      transform: translate(32px, -32px) rotate(-45deg);
      opacity: 0.5;
    }
    ${Link} {
      transform: translate(0px, -26px);
      opacity: 1;
    }
  }
`;

const ProjectCard = props => {

  return (
    <OuterContainer href={props.link} target="_blank">

      <Link>{props.link}</Link>
      <Arrow src={ArrowImg} />

      <CardContainer>
        <CardTitle>{props.title}, </CardTitle>
        <Date>{props.date}</Date>
        <Description>
          {props.description}
        </Description>
        <Divider />
        {props.tags.map(tag => 
          <SmallerTag 
            onClick={e => {props.toggleTag(tag); e.preventDefault()}}
            active={props.activeTags.has(tag)}
            key={tag}
          >{tag}</SmallerTag>
        )}
      </CardContainer>

    </OuterContainer>
  );
};

export default ProjectCard;