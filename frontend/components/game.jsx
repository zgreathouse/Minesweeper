import React, { Component } from 'react';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state {
      board: board,
    }

    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(){

  }

  render() {
    return (
      <div>
        <h1>Minesweeper</h1>
        <Board board={this.state.board} update={this.updateGame} />
      </div>
    );
  }
}

export default Game;
