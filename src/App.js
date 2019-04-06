import React, { Component } from 'react';
import BucketScene from './views/BucketScene';
import styled, { ThemeProvider } from 'styled-components';
import { color, space, fontSize } from 'styled-system';
import theme from './theme';

let { REACT_APP_SERVER_URL: url } = process.env;

class App extends Component {
  state = {
    editing: false,
    options: [],
    position: 0,
    error: null,
  };

  async componentDidMount() {
    this.fetchOptions();
  }

  fetchOptions = async () => {
    try {
      const result = await fetch(`${url}/beer`);
      const jsonResult = await result.json();
      console.log(jsonResult);
      const filteredResult = jsonResult.filter(option => option.name !== '');
      this.setState({ options: filteredResult });
    } catch (err) {
      console.dir(err);
      this.setState({ error: 'Failed to load drinks.' });
    }
  };

  render() {
    const { editing, options, position } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <MainApp bg="lightBlue">
          <header>
            <HeaderText fontSize="header" color="blue">
              FluentStream Fun Summer Fun Time
            </HeaderText>
          </header>
          {editing ? null : (
            <BucketScene options={options} position={position} />
          )}
        </MainApp>
      </ThemeProvider>
    );
  }
}

const MainApp = styled.div`
  ${color}
  ${space}
  height: 100vh;
`;

const HeaderText = styled.h1`
  ${fontSize}
  ${color}
  text-align: center;
`;

export default App;
