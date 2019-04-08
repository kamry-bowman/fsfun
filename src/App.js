import React, { Component } from 'react';
import BucketScene from './views/BucketScene';
import AddBottle from './views/AddBottle';
import Error from './components/Error';
import styled, { ThemeProvider } from 'styled-components';
import { color, space, fontSize } from 'styled-system';
import theme from './theme';

const url = process.env.REACT_APP_SERVER_URL;

class App extends Component {
  state = {
    adding: false,
    options: [],
    position: 0,
    error: '',
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
    this.setState(({ position, options }) => {
      let newPosition = (position + step) % options.length;
      newPosition =
        newPosition >= 0 ? newPosition : newPosition + options.length - 4;
      return {
        position: newPosition,
      };
    });
  };

  createOption = async name => {
    try {
      // update server
      await fetch(`${url}/beer`, {
        method: 'POST',
        body: JSON.stringify({
          name,
          likes: 1,
        }),
      });

      // API is currently responding with 204 and no id, so full list is refetched on success
      // a timeout is used as there is a race condition with arrival of success message and the
      // creation of beer in database.
      setTimeout(async () => {
        try {
          const result = await fetch(`${url}/beer`);
          const jsonResult = await result.json();
          const filteredResult = jsonResult.filter(
            option => option.name !== ''
          );
          // update state
          this.setState({ options: filteredResult, adding: false });
        } catch (err) {
          console.log(err);
        }
      }, 500);
    } catch (err) {
      console.log(err);
      this.setState({ error: 'Failed to create beer option.' });
    }
  };

  toggleAdd = () => this.setState({ adding: !this.state.adding });

  setError = error => this.setState({ error });

  render() {
    const { adding, options, position, error } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <MainApp bg="lightBlue">
          <header>
            <HeaderText fontSize="header" color="blue" pt={4} pb={2}>
              FluentStream Fun Summer Fun Time
            </HeaderText>
            <Nav fontSize={3} color="blue" py={4}>
              <p>
                {!adding ? `Don't see what you like?` : `Changed your mind?`}
              </p>
              <button type="button" onClick={this.toggleAdd}>
                {!adding ? 'Add a beer' : 'Back to bucket'}
              </button>
            </Nav>
            {error ? (
              <Error
                error={error}
                clearError={() => this.setState({ error: '' })}
              />
            ) : null}
          </header>
          {adding ? (
            <AddBottle
              setError={this.setError}
              createOption={this.createOption}
              toggleAdd={this.toggleAdd}
            />
          ) : (
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

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Nav = styled.nav`
  ${fontSize}
  ${color}
  ${space}
  text-align: center;
  p {
    opacity: .8;
  }

  button {
    font-weight: 800;
    text-decoration: underline;
    opacity: .9;
    transition: transform .5s;

    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }
  }
`;

const HeaderText = styled.h1`
  ${fontSize}
  ${color}
  ${space}
  text-align: center;
  font-weight: 800;
`;

export default App;
