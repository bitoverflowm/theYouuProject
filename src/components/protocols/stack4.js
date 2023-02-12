/**
 * Stack 4:
The Huberman Super Special

How to:
300mg Alpha GPC
500 mg Phenylethylamine
500 mg L-Tyrosine
caffeine

Effects:
increases acetyl choline
increases focus
increased alertness

Warning:
do not take after 2-3pm
do not do everyday!
 */


import { useState } from "react";

const Stack4 = ({ setSelectedId, randomizeProtocol }) => {
    const [currentDiv, setCurrentDiv] = useState(1)

    const handleClick = () => {
        setCurrentDiv(currentDiv === 1 ? 2 : 1)
    };

    return (
        <div>
            <div>Stack 4</div>
            <div className="flex">
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={() => setSelectedId(null)}>🏠 Go Home</div>
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={() => randomizeProtocol()}>⏭️ Show me something else</div>
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={handleClick}>✅ Lets Go!</div>
            </div>
        </div>
    )
}

export default Stack4