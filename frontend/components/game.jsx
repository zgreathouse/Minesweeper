import React, { Component } from 'react';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      board: this.props.board,
    }
  }

  render() {
    return (
      <h1>minesweeper</h1>
    );
  }
}
