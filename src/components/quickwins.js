'use client';

import ColdWater from "./protocols/coldwater";

const QuickWins = ({ setSelectedId }) => {

  return (
    <div className="place-content-center flex flex-col">
      <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold" onClick={() => setSelectedId(null)}>🔙 Go back</div>
      <div className="text-center font-extrabold text-xl text-white">Quick Wins For Results Now</div>
      <div className="p-4">
        <ColdWater />
      </div>
      
    </div>
  )
}

export default QuickWins;