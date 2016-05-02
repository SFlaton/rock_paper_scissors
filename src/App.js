import React from 'react';
import GameModel from './models/GameModel';
import NewGameComponent from './components/NewGameComponent';
import GameListComponent from './components/GameListComponent';

class App extends React.Component {
    constructor(){
      super();

      this.state = {
        games: [],
        currentGame: null
      };
    }

    componentDidMount() {
      this.games = new GameModel();
      this.games.subscribe(this.updateList.bind(this));

    }

    updateList() {
      this.setState({
        games: this.games.resources
      });
    }

    createGame(newPlayer) {
      this.games.addResource({
        playerOne:newPlayer
      });
    }

    containerStyles() {
      return {
        width: "500px",
        height: "500px",
        margin: "auto"
      }
    }

    headerStyle(){
      return {
        textAlign: "center"
      }
    }

    selectGame(gameId) {
      this.games.getResource({ _id: gameId });
      console.log(gameId);
      this.setState({
        currentGame: gameId
      });
    }

    render() {
      console.log(this.state);
      return (
          <div style={this.containerStyles()}>
            <h1 style={this.headerStyle()}>Rock Paper Scissors</h1>
            <NewGameComponent onCreate={this.createGame.bind(this)}/>
            <GameListComponent games={this.state.games} onSelect={this.selectGame.bind(this)}/>
          </div>
      );
    }
}

export default App;
