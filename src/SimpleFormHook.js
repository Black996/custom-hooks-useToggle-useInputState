import React, { useState } from "react";

// Pre custom Hook useInputState

function SimpleFormHooks() {
    const [email, setEmail] = useState("");
    const handleChange = (evt) => {
        setEmail(evt.target.value)
    }

    return (
        <div>
            <h1>The Value is...</h1>
            <input value={email} type="text" onChange={handleChange} />
            <button onClick={() => setEmail("")}>Submit</button>
        </div>
    )
}

export default SimpleFormHooks;