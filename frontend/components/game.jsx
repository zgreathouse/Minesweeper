import React, { Component } from 'react';

//components
import Board from './board';

class Game extends Component {

  constructor(props) {
    super(props);

    const board = new Minesweeper.Board(9, 10);

    this.state {
      board,
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
