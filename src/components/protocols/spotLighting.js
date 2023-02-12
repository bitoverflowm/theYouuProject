/**
 * Tool 23:
Spotlighting

How to:
look at a specific thing; anything; could be your hand, could be a random object near you
for a minute or more the longer the better

Effects:
increase focus
maintain increased focus for longer
activated a medly of neurochemicals:
increases dopamine
increases epinepherine
puts you into a state of readiness and clear focus
 */

import { useState } from "react";

const SpotLighting = ({ setSelectedId, randomizeProtocol }) => {
    const [currentDiv, setCurrentDiv] = useState(1)

    const handleClick = () => {
        setCurrentDiv(currentDiv === 1 ? 2 : 1)
    };

    return (
        <div>
            <div>Spotlighting</div>
            <div className="flex">
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={() => setSelectedId(null)}>🏠 Go Home</div>
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={() => randomizeProtocol()}>⏭️ Show me something else</div>
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={handleClick}>✅ Lets Go!</div>
            </div>
        </div>
        
    )
}

export default SpotLighting