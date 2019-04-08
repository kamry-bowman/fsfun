import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import Bottle from '../components/Bottle';
import add from '../images/add.svg';

export default class AddBottle extends React.Component {
  state = {
    name: '',
  };

  inputRef = React.createRef();

  updateName = e => {
    if (e.target.value.length > 24) {
      this.props.setError('Cannot accept names over 24 characters.');
    } else {
      this.props.setError('');
      this.setState({ name: e.target.value });
    }
  };

  submit = e => {
    e.preventDefault();
    if (!this.state.name) {
      return this.props.setError('Must write a name before submitting.');
    }
    this.props.createOption(this.state.name);
  };

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <Container mx={4}>
        <Bottle>
          <form onSubmit={this.submit}>
            <textarea
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.updateName}
              ref={this.inputRef}
            />
            <button type="submit">
              <img src={add} alt="Create bottle" />
            </button>
          </form>
        </Bottle>
      </Container>
    );
  }
}

const Container = styled.div`
  ${space}
  flex: 1;
  display: flex;
  justify-content: center;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  textarea {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 3.2rem;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: start;
    width: 100%;
  }

  button {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;

    &:hover {
      img {
        opacity: 1;
      }
    }

    &:active {
      img {
        transform: scale(0.9);
      }
    }

    img {
      width: 100%;
      height: 100%;
      opacity: 0.8;
    }
  }
`;
