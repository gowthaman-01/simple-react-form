import React, { useState } from "react"

const Joke = (props) => {
    const [isShown, setIsShown] = useState(false);
    const show = () => {
        setIsShown(prev => prev ? prev : !prev)
    }
    const hide = () => {
        setIsShown(prev => prev ? !prev : prev)
    }
    console.log(isShown);
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <hr />
            <button className="button" onClick={show}>Show punchline</button>
            <button className="button" onClick={hide}>Hide punchline</button>
        </div>
    )

}

export default Joke 