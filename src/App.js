import React, { Component } from 'react';
import styled from 'styled-components';

import Projects from './components/Projects';
import {projectData, tags} from './data.js';
import ArrowImg from './img/arrow.png';

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
  width: 92%;
  margin: auto;
  padding-bottom: 80px;
`;

const Arrow = styled.img`
  display: block
  position: absolute;
  transform: rotate(180deg);
  width: 50px;
  height: 50px;
  top: 38px;
  left: calc(10% - 50px);
  opacity: 0.1;
  transition: 0.15s ease;
  &:hover {
    opacity: 0.5;
  }
`;

const Divider = styled.div`
  width: 40px;
  height: 1px;
  background: #DADCE0;
  margin: 30px auto 30px auto;
`;


class App extends Component {
  render() {
    return (
      <div className="App">

        <a href="https://ryanrouleau.com">
          <Arrow src={ArrowImg} />
        </a>

        <Title>Ryan Rouleau, <span style={{fontFamily: 'Raleway', fontWeight: 800, fontSize: '38px'}}>Projects</span></Title>

        <Divider />

        <Content>
          <Projects projects={projectData} tags={tags} />
        </Content>

      </div>
    );
  }
}

export default App;
