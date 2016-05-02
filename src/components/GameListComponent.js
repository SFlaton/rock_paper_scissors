import React from 'react';
import GameListItemComponent from './GameListItemComponent';

class GameListComponent extends React.Component {
  selectGame(event) {
    let gameId = event.currentTarget.id;
    this.props.onSelect(gameId);
  }

  render() {
    console.log(this.state);
    let component = this;
    return (
      <ul>
        {this.props.games.map(function(game) {
          return (<GameListItemComponent key={game._id} game={game} onClick={component.selectGame.bind(component)}>Game by {game.playerOne}/>);
        })}
      </ul>
    );
  }
}

export default GameListComponent;
