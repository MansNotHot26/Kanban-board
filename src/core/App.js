
import React from "react";
import Board from "../components/Board/Board";
import "./App.css";

function App () {
    return (
      <div className="App">
        <div className="Header">Kanban Board</div>
           <Board />
      </div>
    );
}

export default App;
