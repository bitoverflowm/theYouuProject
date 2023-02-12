/**
 * Tool 16:
Phenylethylamine (with Alpha-GPC) 

How to:


Effects:
increase Dopamine 
increase Focus
increase Energy
can use as workaid
increases synaptic dopamine

 */

import { useState } from "react";

const Stack0= ({ setSelectedId, randomizeProtocol }) => {
    const [currentDiv, setCurrentDiv] = useState(1)

    const handleClick = () => {
        setCurrentDiv(currentDiv === 1 ? 2 : 1)
    };

    return (
        <div>
            <div>PenEthylAmine + Alpha GPC</div>
            <div className="flex">
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={() => setSelectedId(null)}>🏠 Go Home</div>
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={() => randomizeProtocol()}>⏭️ Show me something else</div>
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={handleClick}>✅ Lets Go!</div>
            </div>
        </div>
    )
}

export default Stack0