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

  componentDidMount() {
    this.fetchOptions();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchOptions();
      // this will not likely be called since we are at the
      // root of the application but this remains for refactor resilience
    }
  }

  fetchOptions = async () => {
    try {
      const result = await fetch(`${url}/beer`);
      const jsonResult = await result.json();
      const filteredResult = jsonResult.filter(option => option.name !== '');
      this.setState({ options: filteredResult });
    } catch (err) {
      console.dir(err);
      this.setState({ error: 'Failed to load drinks.' });
    }
  };

  updateLikes = async ({ id, likes }) => {
    const newLikes = likes + 1;
    try {
      // update server
      await fetch(`${url}/beer/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          likes: newLikes,
        }),
      });

      // update state
      const newOptions = this.state.options.map(option =>
        option.id === id ? { ...option, likes: newLikes } : option
      );
      this.setState({ options: newOptions });
    } catch (err) {
      this.setState({ error: 'Failed to update likes.' });
    }
  };

  // updates position in range of options, wrapping around
  updatePos = step => {
    console.log(step);
    this.setState(({ position, options }) => {
      let newPosition = (position + step) % options.length;
      newPosition =
        newPosition > 0 ? newPosition : newPosition + options.length - 4;
      return {
        position: newPosition,
      };
    });
  };

  render() {
    const { editing, options, position } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <MainApp bg="lightBlue">
          <header>
            <HeaderText fontSize="header" color="blue" py={5}>
              FluentStream Fun Summer Fun Time
            </HeaderText>
          </header>
          {editing ? null : (
            <BucketScene
              options={options}
              position={position}
              updateLikes={this.updateLikes}
              selectLeft={() => this.updatePos(-4)}
              selectRight={() => this.updatePos(4)}
            />
          )}
        </MainApp>
      </ThemeProvider>
    );
  }
}

const MainApp = styled.div`
  ${color}
  ${space}
  min-width: 1140px;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h1`
  ${fontSize}
  ${color}
  ${space}
  text-align: center;
  font-weight: 800;
`;

export default App;
