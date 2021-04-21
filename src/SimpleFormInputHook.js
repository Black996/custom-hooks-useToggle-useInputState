import React from "react";
import useInputState from "./hooks/useInputState";

// After custom Hook useInputState


function SimpleFormInputHook() {
    const [email, updateEmail, resetEmail] = useInputState("");
    return (
        <div>
            <h1>The Value is{email ? email : "..."}</h1>
            <input value={email} type="text" onChange={updateEmail} />
            <button onClick={resetEmail}>Submit</button>
        </div>
    )
}

export default SimpleFormInputHook;