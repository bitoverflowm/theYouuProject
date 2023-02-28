'use client';

import { useState, useEffect, useRef } from "react";
import ColdWater from "./protocols/coldwater";
import Stack1 from "./protocols/stack1";
import SupCaffeineCoffee from "./protocols/supCaffeineCoffee";
import SupCaffeineTea from "./protocols/supCaffeineTea";
import SupCaffeineYerba from "./protocols/supCaffeineYerba";
import SpotLightingProtocol from "./protocols/spotLightingProtocol";
import BeliefReinforcement from "./protocols/beliefreinforcement";
import SupMecuniPurines from "./protocols/supMecunapurines";
import SupLTyrosine from "./protocols/supLTyrosine";
import Stack0 from "./protocols/stack0";
import SupHyperzineA from "./protocols/supHyperzineA";
import OxySocial from "./protocols/oxySocial";
import EarlyMorningSun from "./protocols/earlyMorningSun";
import Stack2 from "./protocols/stack2";
import Stack3 from "./protocols/stack3";
import Stack4 from "./protocols/stack4";


const QuickWins = ({ setSelectedId }) => {

  const [ quickWinsId, setQuickWinsId ] = useState(null)
  const [showHeader, setShowHeader] = useState(true);
  const quickWinsView = useRef(null)
  

  useEffect(() => {
    setQuickWinsId(0)
    window.scrollTo(0, quickWinsView.current.offsetTop)

    const timeoutId = setTimeout(() => {
      setShowHeader(false)
    }, 3000)
    return ()  => {
      clearTimeout(timeoutId)
    }
  }, []);

  const randomizeProtocol = () => {
    setQuickWinsId(Math.floor(Math.random() * 16));
  } 
  
  /**
   * 0) Cold Water Exposure
   * 1) Caffeine: Coffee
   * 2) Caffeine: Tea
   * 3) Caffeing: Yerba Mate
   * 4) Spotlighting
   * 5) Belief Reinforcement
   * 6) Muccuna Purines
   * 7) L-Tyrosine
   * 8) Phenylethylamine (with Alpha-GPC) 
   * 9) Hyperzine A
   * 10) Social Connectedness
   * 11) is it morning? Early Morning Sunlight Viewing
   * 12) Stack 1: Alpha GPC
   * 13) Stack 2: L-Tyrosine + Alpha GPC
   * 14) Stack 3: The Huberman Special
   * 15) Stack 4: The Huberman Super Special (Beast Mode)
   */  

  return (
    <div ref={quickWinsView}>
      <div className="-mt-4 -ml-4 pb-2 hover:cursor-pointer text-white font-bold" onClick={() => setSelectedId(null)}> ⬅️ back</div>
      <div className="place-content-center flex flex-col">
        {showHeader && <div className="text-center font-extrabold text-xl text-white py-4">Quick Wins For Results Now</div>}
        <div className="p-4">
          {quickWinsId === 0 && <ColdWater setSelectedId={setSelectedId} randomizeProtocol={randomizeProtocol}/> }
          {quickWinsId === 1 && <SupCaffeineCoffee setSelectedId={setSelectedId} randomizeProtocol={randomizeProtocol}/> }
          {quickWinsId === 2 && <SupCaffeineTea setSelectedId={setSelectedId} randomizeProtocol={randomizeProtocol}/> }
          {quickWinsId === 3 && <SupCaffeineYerba setSelectedId={setSelectedId} randomizeProtocol={randomizeProtocol}/> }
          {quickWinsId === 4 && <SpotLightingProtocol setSelectedId={setSelectedId} randomizeProtocol={randomizeProtocol}/> }
          {quickWinsId === 5 && <BeliefReinforcement setSelectedId={setSelectedId} randomizeProtocol={randomizeProtocol}/> }
          {quickWinsId === 6 && <SupMecuniPurines setSelectedId={setSelectedId} randomizeProtocol={randomizeProtocol}/> }
          {quickWinsId === 7 && <SupLTyrosine setSelectedId={setSelectedId} randomizeProtocol={randomizeProtocol}/> }
          {quickWinsId === 8 && <Stack0 setSelectedId={setSelectedId} randomizeProtocol={randomizeProtocol}/> }
          {quickWinsId === 9 && <SupHyperzineA setSelectedId={setSelectedId} randomizeProtocol={randomizeProtocol}/> }
          {quickWinsId === 10 && <OxySocial setSelectedId={setSelectedId} randomizeProtocol={randomizeProtocol}/> }
          {quickWinsId === 11 && <EarlyMorningSun setSelectedId={setSelectedId} randomizeProtocol={randomizeProtocol}/> }
          {quickWinsId === 12 && <Stack1 setSelectedId={setSelectedId} randomizeProtocol={randomizeProtocol}/> }
          {quickWinsId === 13 && <Stack2 setSelectedId={setSelectedId} randomizeProtocol={randomizeProtocol}/> }
          {quickWinsId === 14 && <Stack3 setSelectedId={setSelectedId} randomizeProtocol={randomizeProtocol}/> }
          {quickWinsId === 15 && <Stack4 setSelectedId={setSelectedId} randomizeProtocol={randomizeProtocol}/> }       
        </div>
      </div>
    </div>
  )
}

export default QuickWins;