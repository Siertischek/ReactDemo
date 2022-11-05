import React, { useState } from "react";

const Counter = (props) => 
{
    const [countState, setCountState] = useState(77)

    function incCount()
    {
        setCountState(countState + props.incBy)
    }
    
    const countStyle = {
        fontSize: "2em"
    }

    return(
        <div>
            <div id='c' style={countStyle}>{countState}</div>
            <button onClick={incCount}>+{props.incBy}</button>
        </div>
    )
}

export default Counter;
