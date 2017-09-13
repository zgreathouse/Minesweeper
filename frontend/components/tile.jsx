import React, { Component } from 'react';
import * as Minesweeper from '../../minesweeper';

class Tile extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const flagged = e.altKey ? true : false;
    this.props.updateGame(this.props.tile, flagged);
  }

  render() {
    const tile = this.props.tile;
    let klass, text, count;

    if (tile.explored) {
      if (this.bombed) {
        klass = 'bombed';
        text = '\u2622';
      } else {
        klass = 'explored';
        count = tile.adjacentBombCount();
        text = (count > 0 ? `${count} ` : "");
      }
    } else if (tile.flagged) {
      klass = 'flagged';
      text = '\u2622';
    } else {
      klass = 'unexplored'
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
