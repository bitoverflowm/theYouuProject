/*
Tool 11:
Mucuna Purines

How to:
Take Mucuna Purine

Effects:
triggers a super large increase in dopamine
refuces symptoms of parkinsons
blunts/ reduces prolactin
sperm concentration and quality are greatly increased
Warning:
any time you take a suppliment taht is literally dopamine, you will cause baseline crash shortly after
*/


import { useState } from "react";

const SupMecuniPurines = ({ setSelectedId, randomizeProtocol }) => {
    const [currentDiv, setCurrentDiv] = useState(1)

    const handleClick = () => {
        setCurrentDiv(currentDiv === 1 ? 2 : 1)
    };

    return (
        <div>
            <div>Mecuna Purines</div>
            <div className="flex">
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={() => setSelectedId(null)}>🏠 Go Home</div>
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={() => randomizeProtocol()}>⏭️ Show me something else</div>
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={handleClick}>✅ Lets Go!</div>
            </div>
        </div>
    )
}

export default SupMecuniPurines