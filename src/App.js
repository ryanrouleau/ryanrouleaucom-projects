import React, { Component } from 'react';
import styled from 'styled-components';
import Projects from './components/Projects';

const Header = styled.div`
  width: 100%;
  height: 80px;
  background: #fff;
  box-shadow: 0 0 30px 0 rgba(0,0,0,.08), 0 3px 2px 0 rgba(0,0,0,.05);
`;

const Title = styled.div`
  font-family: 'Raleway';
  font-weight: 800;
  font-size: 44px;
  width: 60%;
  margin: auto;
  padding-top: 16px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <Title>Projects</Title>
        </Header>
        <Projects data={{}} />
      </div>
    );
  }
}

export default App;
