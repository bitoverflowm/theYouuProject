/*
Tool 8:
Belief reinforcement

How to:
What do you believe already? 
We will show you a video that supports that belief


Effects:
this will give you a quick boost in dopamine


Meta:
boost mood
boost motivation
boost drive */

import { useState } from "react";

const BeliefReinforcement = ({ setSelectedId, randomizeProtocol }) => {

    const [currentDiv, setCurrentDiv] = useState(1)

    const handleClick = () => {
        setCurrentDiv(currentDiv === 1 ? 2 : 1)
    };

    return (
        <div className="place-content-center flex flex-col">
            <div>Belief Reinforcement</div>
            <div className="flex">
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={() => setSelectedId(null)}>🏠 Go Home</div>
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={() => randomizeProtocol()}>⏭️ Show me something else</div>
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={handleClick}>✅ Lets Go!</div>
            </div>
        </div>

    )
}

export default BeliefReinforcement