import { useState } from "react";

const ColdWater = ({ setSelectedId }) => {
    //results:
    // > rapid increase in norepinephrine
    // > increases epinepherine which is adrenaline
    // > increase in dopamine: 
    //     > sustained dopamine increase by 200% above baseline
    // > increase metabolism and fatloss
    // > improve wellbeing
    // > improve clarity of mind
    // > create a calm state of mind
    // cold bath:
    // time duration: 10-15 mins
    // > directions:
    // > get your method:
    //    > cold bath (ice tub, bath, etc)
    //    > cold body of water: river, lake, etc
    //    > your bath tub with ice (buy ice here)
    //      -> submerge up to the neck 
    //      -> 10-15 mins
    //    > cryotherapy
    //    > cold shower
    //          > 1-3 mins cold shower as cold as you can possibly handle
    // study source: 
    // > reference: Human physiological responses to immersion into water of different temperatures: https://link.springer.com/article/10.1007/s004210050065

    const [currentDiv, setCurrentDiv] = useState(1);
    const [timer, setTimer] = useState(10)

    const handleClick = () => {
      setCurrentDiv(currentDiv === 1 ? 2 : 1);
    };
    
    return (
      <div>
        <div className={`place-content-center flex flex-col z-30 text-white ${currentDiv === 1 ? 'block' : 'hidden'}`}>      
          <div className="font-bold text-center"> Let's Get Some Cold Exposure Today</div>
          <img src={`/images/icebathemoji.png`} alt={'icebath'} className="w-full h-auto mt-4 rounded-lg" />
          <div className="pt-2">
            <div>
              <div className="text-xl font-extrabold p-2">What you can expect to happen:</div>
              <ul className="list-disc text-white text-lg">
                <li className="mb-2">Increase in dopamine by as much as 200-250%</li>
                <li className="mb-2">As opposed to other instantaneous sources of dopamine rises, cold water exposure results in a sustained increase in dopamine above baseline</li>
                <li className="mb-2">Rapid increase in epinephrine which is adrenaline</li>
                <li className="mb-2">Increase metabolism and fat loss</li>
                <li className="mb-2">Improve wellbeing</li>
                <li className="mb-2">Improve clarity of mind</li>
                <li className="mb-2">Create a calm state of mind</li>
              </ul>
            </div>
          </div>
          <button
          className="bg-white rounded-full py-2 px-4 text-black hover:bg-gray-200"
          onClick={handleClick}
          >
            Lets Go!
          </button>
        </div>
        <div className={`flex flex-col items-center text-white ${currentDiv === 2 ? 'block' : 'hidden'}`}>
          <div className="text-xl font-extrabold">Do you have your own:</div>
          <div className="flex flex-col items-center">
            <button className="bg-sky-400 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto" onClick={()=> setCurrentDiv('coldPlunge')}>Cold Plunge</button>
            <button className="bg-sky-600 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto" onClick={()=> setCurrentDiv('coldShower')} >Shower That Can Get Cold</button>
            <button className="bg-sky-400 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto" onClick={()=> setCurrentDiv('bathTub')}>Bath Tub & Some Ice</button>
            <button className="bg-sky-500 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto" onClick={()=> setCurrentDiv('cryotherapy')}>Cryotherapy</button>
          </div>
          <div className="text-xl font-extrabold mt-4">Or</div>
          <div className="flex flex-col items-center">
            <button className="bg-sky-800 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto" onClick={()=> setCurrentDiv('findNaturalCold')}>Find a Natural Cold Body of Water Near You</button>
            <button className="bg-sky-200 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto" onClick={()=> setCurrentDiv('findColdPlunge')}>Cold Plunge</button>
            <button className="bg-sky-500 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto" onClick={()=> setCurrentDiv('findCryo')}>Find The Closest Cryotherapy Near You</button>
            <button className="bg-sky-100 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto" onClick={()=> setCurrentDiv('buyIce')}>Bath tub and no Ice? Buy some Ice</button>
            <button className="bg-sky-600 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto" onClick={()=> setCurrentDiv('findNeighborPlunge')}>Find A Neighbor with a Cold Plunge</button>
          </div>
        </div>
        <div className={`flex flex-col items-center text-white ${currentDiv === 'coldPlunge' ? 'block' : 'hidden'}`}>
          <div className="text-xl font-extrabold">Lets get started with your Cold Plunge:</div>
          <div className="flex flex-col items-center">
            <div className="font-bold"> Step 1: </div>
            <div className="font-bold"> Make sure your water is as cold as you can bear; remember discomfort is part of the process </div>
            <div className="font-bold"> Step 2: </div>
            <div className="font-bold"> Get into the cold plunge and submerge up to your neck </div>
            <div className="font-bold"> Step 3: </div>
            <div className="font-bold"> How long can you go for? </div>
          </div>
          <div className="text-xl font-extrabold mt-4">Choose a length of time:</div>
          <div className="flex flex-col items-center">
            <button className="bg-sky-800 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto" onClick={()=> setTimer(2)}>novice: 2mins</button>
            <button className="bg-sky-800 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto" onClick={()=> setTimer(3)}>beginner: 3mins</button>
            <button className="bg-sky-800 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto" onClick={()=> setTimer(5)}>intermediate: 5mins</button>
            <button className="bg-sky-800 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto" onClick={()=> setTimer(10)}>advanced: 10mins</button>
            <button className="bg-sky-800 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto" onClick={()=> setTimer(15)}>intermediate: 15mins</button>
          </div>
        </div>     
      </div>
    )
}

export default ColdWater;