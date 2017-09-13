import React, { Component } from 'react';
import * as Minesweeper from '../../minesweeper';

class Tile extends Component {

  constructor(props) {
    super(props);

    //bound methods
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const flagged = e.altKey ? true : false;
    this.props.updateGame(this.props.tile, flagged);
  }

  render() {
    const tile = this.props.tile;
    let klass, text, count;

    //assign a klass for the className and text based on
    //the different states of a given tile
    if (tile.explored) {
      if (tile.bombed) {
        klass = 'bombed';
        text = '';
      } else {
        klass = 'explored';
        count = tile.adjacentBombCount();
        text = (count > 0 ? `${count} ` : "");
      }
    } else if (tile.flagged) {
      klass = 'flagged';
      text = '';
    } else {
      klass = 'unexplored';
    }

    klass = `tile ${klass}`;

    return (
      <div className={klass} onClick={this.handleClick}>
        {text}
      </div>
    );
  }
}

export default Tile;
