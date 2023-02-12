import { useState } from "react";

const SupCaffeineYerba = ({ setSelectedId, randomizeProtocol }) => {
  const [currentDiv, setCurrentDiv] = useState(1)

  const handleClick = () => {
    setCurrentDiv(currentDiv === 1 ? 2 : 1)
  };
    /*
    Tool 4 c:
    Caffeine - yerba mate

    How to:
    take 100-400mg
    tea
    coffee
    yerba mate


    Effects:
    increases dopamine just a little
    increases upregulation of dopamine receptors
    increases your ability to enjoy dopamine


    Meta categories:
    Boost Energy
    Enhance Mood
    Improve Brain Function
    Increase Metabolism and help burn fat
    Protect your body against free radicals: “anti oxidant effect”
    Improve cardiovascular health
    anti oxidents
    GLP1 for management of blood sugar
    protects dopemenergic neurons    
    */
    

  return (
    <div className="place-content-center flex flex-col">
      <div>Yerba Mate time</div>
      <div className="flex">
        <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={() => setSelectedId(null)}>🏠 Go Home</div>
        <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={() => randomizeProtocol()}>⏭️ Show me something else</div>
        <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={handleClick}>✅ Lets Go!</div>
      </div>
    </div>
  )
}

export default SupCaffeineYerba;