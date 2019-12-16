import React, { Component } from "react";
import "./App.css";
import Board from "./components/Board";

class App extends Component {
  render() {
    return (
      <section>
        <header className="header">
          <h1 className="header__h1">
            <span className="header__text">
              Welcome to Sara's Inspiration Board
            </span>
          </h1>
        </header>
        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={`sara`}
        />
      </section>
    );
  }
}

export default App;
