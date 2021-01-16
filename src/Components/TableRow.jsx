import React from "react";
import TableCell from "./TableCell";

export default function TableRow(props){
    //Take in props from Table.jsx
    let {numCols, cellColor, handleClick } = props;

    let cols = []; //Create array for our columns

    for(let i = 0; i < numCols; i++){       //Iterate through passed in number of columns...
        cols.push(                          //And push a cell for each column
            <TableCell
                cellColor={cellColor}
                handleClick={handleClick}
            />
        )
    }

    return (
        <tr className = "row">
            {cols}
        </tr>
    )
}