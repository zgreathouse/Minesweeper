import React, { Component } from 'react';
import * as Minesweeper from '../../minesweeper';

//components
import Tile from './tile';

class Board extends Component {

  constructor(props) {
    super(props);

    this.renderRows = this.renderRows.bind(this);
    this.renderTiles = this.renderTiles.bind(this);
  }

  renderRows() {
    const board = this.props.board;

    //map over rows of board's grid
    return board.grid.map( (row, i) => {
      return (
        <div className="row" key={`row-${i}`}>
          {this.renderTiles(row, i)}
        </div>
      );
    });
  }

  renderTiles(row, i){
    const board = this.props.board;

    //map over tiles of a given row
    return row.map( (tile, j) => {
      return (
        <Tile
          tile={tile}
          updateGame={this.props.updateGame}
          key={i * board.gridSize + j} />
      );
    });
  }

  render() {
    return(
      <div id="board">
        {this.renderRows()}
      </div>
    );
  }
}

export default Board;
