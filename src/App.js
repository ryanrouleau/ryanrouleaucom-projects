import React, { Component } from 'react';
import styled from 'styled-components';

import Projects from './components/Projects';
import {projectData, tags} from './data.js';

const Title = styled.div`
  font-family: 'Raleway';
  font-weight: 900;
  font-size: 44px;
  width: 80%;
  margin: auto;
  text-align: center;
  padding-top: 42px;
`;

const Content = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 45px;
`;
console.log(projectData);
class App extends Component {
  render() {
    return (
      <div className="App">

        <Title>Ryan Rouleau, <span style={{fontFamily: 'Raleway', fontWeight: 800, fontSize: '38px'}}>Projects</span></Title>

        <Content>
          <Projects projects={projectData} tags={tags} />
        </Content>

      </div>
    );
  }
}

export default App;
