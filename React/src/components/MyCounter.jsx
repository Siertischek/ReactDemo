import React, { useState } from "react";

const Counter = (props) => 
{
    const [countState, setCountState] = useState(77)

    function incCount()
    {
        setCountState(countState + props.incBy)
    }

    return(
        <div>
            <button onClick={incCount}>+{props.incBy}</button>
        </div>
    )
}

export default Counter;
