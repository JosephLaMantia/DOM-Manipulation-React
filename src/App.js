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
      cellColor: ""
    };
  }

  //Add rows to the grid:
  addRows = () =>{
    this.setState(
      {numRows: this.state.numRows + 1}
    )
  }

  //Add cols to the grid:
  addCols = () =>{
    this.setState(
      {numCols: this.state.numCols + 1}
    )
  }

  //Select a color from a dropdown menu
  selectColor=(event)=>{
    this.setState(
      {color: event.target.value}
    )
  }

  //Change color when cell is clicked
  handleClick=(event)=>{
    event.target.style.backgroundColor = this.state.color;
  }


  render(){
    return (
      <div className = "App">

        {/* Welcome message */}
        <h1>MANIPULATE THE GRID</h1>
        <h3>Click a cell to change it to the selected color.</h3>

        {/* Buttons */}
        <div className = "buttons">
          <button id="add-rows-btn" onClick={this.addRows}> <h2>ADD ROWS</h2> </button>
          <button id="add-cols-btn" onClick={this.addCols}> <h2>ADD COLUMNS</h2> </button>
        </div>

        {/* Color select dropdown menu */}
        <div className = "color-select">
          <select name="colors" id="color-select-dropdown" value={this.state.color} onChange={this.selectColor}>
            <option value="rgb(28, 92, 41)">green</option>
            <option value="gray">gray</option>
            <option value="white">white</option>
          </select>
        </div>

        {/* Where grid is stored. */}
        <Table
          numRows = {this.state.numRows}
          numCols = {this.state.numCols}
          color = {this.state.color}
          handleClick = {this.handleClick}
        />
      </div>




    );
  }
}
