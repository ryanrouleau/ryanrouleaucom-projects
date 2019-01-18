import React from 'react';
import styled from 'styled-components';

import Filter from './Filter';
import ProjectCard from './ProjectCard';
import FullWidthDiv from './FullWidthDiv';

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Divider = styled.div`
  width: 40px;
  height: 1px;
  background: #DADCE0;
  margin: 35px auto 15px auto;
`;

class Projects extends React.Component {

  state = {
    activeTags: new Set([]),
  }

  toggleTag = tag => {
    const currentActiveTags = this.state.activeTags;
    if (currentActiveTags.has(tag)) {
      currentActiveTags.delete(tag)
      this.setState({
        activeTags: new Set(currentActiveTags)
      });
    }
    else {
      currentActiveTags.add(tag)
      this.setState({
        activeTags: new Set(currentActiveTags)
      });
    }
  }

  render () {

    const activeProjects = this.state.activeTags.size === 0 ?
     this.props.projects : 
     this.props.projects.filter(
       project => [...this.state.activeTags].every(
         tag => project.tags.includes(tag)
       )
     );

    return (
      <FullWidthDiv>
        <Filter toggleTag={this.toggleTag} tags={this.props.tags} activeTags={this.state.activeTags} />

        <Divider />

        <FlexContainer>
          {activeProjects.map(project => 
            <ProjectCard 
              title={project.name}
              description={project.description}
              link={project.link}
              date={project.date}
              tags={project.tags}
              toggleTag={this.toggleTag}
              activeTags={this.state.activeTags}
              key={project.name}
            />
          )}
        </FlexContainer>
      </FullWidthDiv>
    );
  }
};

export default Projects;