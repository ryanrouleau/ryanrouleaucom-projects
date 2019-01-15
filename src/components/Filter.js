import React from 'react';
import styled from 'styled-components';

import FullWidthDiv from './FullWidthDiv';

const Input = styled.input`
  //border: 1px solid #DADCE0;
  border: 1px solid transparent;
  -webkit-appearance: none;
  outline: none;
  font-family: 'Open Sans';
  font-size: 16px;
  font-weight: 600;
  padding: 12px 22px;
  border-radius: 8px;
  width: 100%;
  transition: 0.2s ease;
  background: #f5f5f5;
  margin-bottom: 26px;
  &:focus {
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.30), 0 1px 3px 1px rgba(60,64,67,0.15);
    background: #fff;
    border: 1px solid #DADCE0;
    box-shadow: 0 1px 1px rgba(0,0,0,0.24);
  }
`;

const TagGroup = styled.div`
  text-align: center;
`;

const TagTitle = styled.div`
  font-family: 'Raleway';
  font-weight: 800;
  font-size: 16px;
  color: #474747;
  margin-top: 18px;
  margin-bottom: 12px;
  margin-left: 6px;
  text-align: center;
`;

const Tag = styled.div`
  cursor: pointer;
  background: #f5f5f5;
  border: 1px solid transparent;
  padding: 6px 12px;
  border-radius: 12px;
  display: inline-block;
  font-size: 12px;
  margin-left: 12px;
  margin-bottom: 12px;
  &:hover {
    background: #fff;
    border: 1px solid #DADCE0;
  }
`;

const activeTagStyle = {
  background: '#fff',
  boxShadow: '0 1px 2px 0 rgba(60,64,67,0.30), 0 1px 3px 1px rgba(60,64,67,0.15)',
};

const genTagGroup = (title, tags) => (
  <TagGroup key={ title }>
    <TagTitle>{ title }</TagTitle>
    { tags.map(tag => <Tag onClick={() => console.log(tag.name)} style={tag.active ? activeTagStyle : {}}>{ tag.name }</Tag>) }
  </TagGroup>
);

const Filter = props => {

  const TagGroups = () => Object.keys(props.tags).map(groupName => 
    genTagGroup(groupName, props.tags[groupName])
  );

  return (
    <FullWidthDiv>

      <TagGroups />

    </FullWidthDiv>
  )
}


export default Filter;