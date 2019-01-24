import React, { Component } from 'react';
import styled from 'styled-components';

import Projects from './components/Projects';
import {projectData, tags} from './data/projectData.js';
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
`;

const BackArrow = styled.img`
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
  margin: 35px auto 35px auto;
`;

const Footer = styled.div`
  width: 100%;
  padding-top: px;
  padding-bottom: 45px;
  text-align: center;
`;

const GitLink = styled.a`
  font-size: 12px;
  display: inline-block;
  transition: 0.15s ease;
  &:hover {
    opacity: 0.8;
  }
`;


class App extends Component {
  render() {
    return (
      <div className="App">

        <a href="https://ryanrouleau.com">
          <BackArrow src={ArrowImg} />
        </a>

        <Title>Ryan Rouleau, <span style={{fontFamily: 'Raleway', fontWeight: 800, fontSize: '38px'}}>Projects</span></Title>

        <Divider />

        <Content>
          <Projects projects={projectData} tags={tags} />
        </Content>

        <Divider style={{marginTop: '45px'}} />

        <Footer>
          <GitLink href="https://github.com/ryanrouleau/ryanrouleaucom-projects" target="_blank">
            Built with React. View the code ->
          </GitLink>
        </Footer>

      </div>
    );
  }
}

export default App;
