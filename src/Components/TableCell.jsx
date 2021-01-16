import React from 'react'
export default function TableCell(props) {
    //Pass in props from TableRow.jsx
    let {handleClick} = props;

    return (
        <td className = "cell"
            onClick = {handleClick}
        />
    )

}