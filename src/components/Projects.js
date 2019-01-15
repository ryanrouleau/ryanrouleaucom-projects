import React from 'react';

import Filter from './Filter';
import FullWidthDiv from './FullWidthDiv';

const tagsToObj = tags => {
  const newTagObj = {};
  Object.keys(tags).forEach(tagGroup => {
    newTagObj[tagGroup] = [];
    tags[tagGroup].forEach(tag => {
      newTagObj[tagGroup].push({
        name: tag,
        active: false,
      });
    });
  });
  return newTagObj;
};

class Projects extends React.Component {
  render () {

    const activeTags

    return (
      <FullWidthDiv>
        <Filter tags={this.props.tags} activeTags={} />
      </FullWidthDiv>
    );
  }
};

export default Projects;