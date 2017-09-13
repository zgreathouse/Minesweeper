import React, { Component } from 'react';
import * as Minesweeper from '../../minesweeper';

//components
import Board from './board';

class Game extends Component {

  constructor(props) {
    super(props);
    const board = new Minesweeper.Board(9, 10);

    //initial state
    this.state = { board: board }
    //bound methods
    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  updateGame(tile, flagged){
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.setState({ board: this.state.board });
  }

  restartGame() {
    const board = new Minesweeper.Board(9, 10);
    this.setState({ board: board });
  }

  render() {
    let modal;

    if (this.state.board.lost() || this.state.board.won()) {
      const text = this.state.board.won() ? "You won!" : "You lost!";
      modal = (
        <div className='modal-screen'>
          <div className='modal-content'>
            <p className='modal-text'>{text}</p>
            <button className='modal-button'
              onClick={this.restartGame}>Play Again
            </button>
          </div>
        </div>
      );
    }

    return (
      <div>
        {modal}
        <p className='directions'>
          Click to explore a tile.<br />
          Alt + click to flag a tile.
        </p>
        <Board board={this.state.board} updateGame={this.updateGame} />
      </div>
    );
  }
}

export default Game;
