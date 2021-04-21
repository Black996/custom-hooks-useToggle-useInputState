import React from "react";
import useToggle from "./hooks/useToggle";

function Toggler() {
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isEnjoying, toggleIsEnjoying] = useToggle(false);

    return (
        <div>
            <h1 onClick={toggleIsHappy}>Are You Happy? {isHappy ? ":)" : ":'("} </h1>
            <h1 onClick={toggleIsEnjoying}>Are You Enjoying {isEnjoying ? ':D' : ':('} </h1>
        </div>
    )
}

export default Toggler;