/**
 * Tool 20:
View Early morning sunlight

How to:
wake up and go outside/ go to balcony
window is not ideal
for 10-30 mins daily
dont wear sunglasses
glasses and contacts are fine

Effects:
causes the release of dopamine
increase levels of gene expression for certain dopamine receptors

 */



import { useState } from "react";

const EarlyMorningSun = ({ setSelectedId, randomizeProtocol }) => {
    const [currentDiv, setCurrentDiv] = useState(1)

    const handleClick = () => {
        setCurrentDiv(currentDiv === 1 ? 2 : 1)
    };

    return (
        <div>
            <div>Get outside and get some sunlight</div>
            <div className="flex">
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={() => setSelectedId(null)}>🏠 Go Home</div>
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={() => randomizeProtocol()}>⏭️ Show me something else</div>
                <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={handleClick}>✅ Lets Go!</div>
            </div>
        </div>
    )
}

export default EarlyMorningSun