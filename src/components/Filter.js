import React from 'react';
import styled from 'styled-components';

import FullWidthDiv from './FullWidthDiv';
import Tag from './Tag';

const TagGroup = styled.div`
  text-align: center;
`;

const TagTitle = styled.div`
  font-family: 'Raleway';
  font-weight: 800;
  font-size: 16px;
  color: #474747;
  margin-top: 18px;
  margin-bottom: 16px;
  margin-left: 6px;
  text-align: center;
`;


const Filter = props => {
  
  const genTagGroup = (title, tags) => (
    <TagGroup key={ title }>
      <TagTitle>{ title }</TagTitle>
      {tags.map(tag => 
        <Tag 
          onClick={() => props.toggleTag(tag)} 
          active={props.activeTags.has(tag)}
          key={tag}
        >{tag}</Tag>
      )}
    </TagGroup>
  );

  const TagGroups = () => Object.keys(props.tags).map(groupName => 
    genTagGroup(groupName, props.tags[groupName], props.activeTags)
  );

  return (
    <FullWidthDiv>

      <TagGroups />

    </FullWidthDiv>
  )
}


export default Filter;