import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table';

export default class App extends Component {
  constructor() {
    super();
    //Set state: Number of rows and columns (default 3 each), and cell color (default empty).
    this.state = {
      numRows: 3,
      numCols: 3,
      cellColor: "",
    };
  }

  //Add rows to the grid:
  addRows = () =>{
    this.setState(
      {numRows : this.state.numRows + 1}
    )
  }


  render(){
    return (
      <div className = "App">
        <h1>Manipulate the grid!</h1>

        <div className = "buttons">
          <button id="add-rows-btn" onClick={this.addRows}> ADD ROWS </button>
        </div>




        {/* Where grid is stored. */}
        <Table
          numRows = {this.state.numRows}
          numCols = {this.state.numCols}
          cellColor = {this.state.cellColor}
          handleClick = {this.handleClick}
        />
      </div>




    );
  }
}
