import React from "react";
import TableRow from "./TableRow";

export default function Table(props){

    //Take in props from App.jsx
    let {numRows, numCols, cellColor, handleClick} = props;

    let rows = [];  //Array for our rows.
    for(let i = 0; i < numRows; i++){   //Iterate through the passed in number of rows... 
        rows.push(                      //And push a row to our grid for each iteration.
            <TableRow
                numCols={numCols}
                cellColor={cellColor}
                handleClick={handleClick}
            />            
        )
    }

    return (
        <div>
            <table id = "table">
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}
