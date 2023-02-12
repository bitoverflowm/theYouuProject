/**
 * Stack 2:
L-Tyrosine and Alpha GPC

How to:
500 mg L-Tyrosine
300 mg Alpha GPC
take before hard work or focused cognitive work

Effects:
increases acetyl choline
increases focus


Warning:
do not take after 2-3pm
do not do everyday!
 */


import { useState } from "react";

const Stack2 = ({ setSelectedId, randomizeProtocol }) => {
    const [currentDiv, setCurrentDiv] = useState(1)

    const handleClick = () => {
        setCurrentDiv(currentDiv === 1 ? 2 : 1)
    };

    return (
        <div>
            <div>Stack 2</div>
            <div className="flex">
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={() => setSelectedId(null)}>🏠 Go Home</div>
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={() => randomizeProtocol()}>⏭️ Show me something else</div>
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={handleClick}>✅ Lets Go!</div>
            </div>
        </div>
    )
}

export default Stack2