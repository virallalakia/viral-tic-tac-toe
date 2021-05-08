import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

class Square extends React.Component {
  render() {
    return (
      <Grid item xs={1}>
        <Paper variant="outlined" square >
          O
        </Paper>
      </Grid>
    );
  }
}

class Board extends React.Component {
  render() {
    const status = 'Next player: X';

    return (
      <Grid container justify="center" alignItems="center">
        <Grid container item justify="center" alignItems="center">
          <Square />
          <Square />
          <Square />
        </Grid>
        <Grid container item justify="center" alignItems="center">
          <Square />
          <Square />
          <Square />
        </Grid>
        <Grid container item justify="center" alignItems="center">
          <Square />
          <Square />
          <Square />
        </Grid>
      </Grid>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
        <Button variant="contained">Hello World</Button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Game />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
