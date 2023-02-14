import { useState } from "react";
import Timer from "../UI/timer";

const ColdWater = ({ setSelectedId, randomizeProtocol}) => {
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

    const [currentDiv, setCurrentDiv] = useState(1)
    const [time, setTime] = useState({minutes: 10, seconds: 0})
    const [timerSelected, setTimerSelected] = useState(false)
    const [sessionComplete, setSessionComplete] = useState(false)

    const handleClick = () => {
      setCurrentDiv(currentDiv === 1 ? 2 : 1);
    };

    const setTimer = ({ minutes, seconds }) => {
      setTime({ minutes, seconds })
      setTimerSelected(true)
    }
    
    return (
      <div>
        <div className={`${(currentDiv === 1 && !(sessionComplete)) ? 'block' : 'hidden'}`}>
          <div className={`flex flex-col z-30 text-white`}>      
            <div className="font-bold text-center"> Let's Get Some Cold Exposure Today</div>
            <img src={`/images/icebathemoji.png`} alt={'icebath'} className="w-48 h-48 mt-4 rounded-lg mx-auto" />
            <div className="pt-2">
              <div className="text-xl font-extrabold p-2">What you can expect to happen:</div>
              <ul className="list-disc text-white text-lg">
                <li className="mb-1">Increase in dopamine by 200-250% above baseline</li>
                <li className="mb-1">As opposed to other instantaneous sources of dopamine rises, cold water exposure results in a sustained increase in dopamine above baseline</li>
                <li className="mb-1">Rapid increase in epinephrine (i.e. adrenaline)</li>
                <li className="mb-1">Increase metabolism and fat loss</li>
                <li className="mb-1">Improve wellbeing</li>
                <li className="mb-1">Improve clarity of mind</li>
                <li className="mb-1">Create a calm state of mind</li>
              </ul>
            </div>
          </div>
          <div className="fixed w-full flex inset-x-0 bottom-5 place-content-center py-2">
            <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold p-6 bg-red-500 mr-4 rounded-lg" onClick={() => randomizeProtocol()}> Skip ⏭️</div>
            <div className="hover:cursor-pointer hover:animate-bounce text-white font-bold p-6 bg-green-600 rounded-lg" onClick={handleClick}>✅ Lets Go!</div>
          </div>
        </div>
        <div className={`flex flex-col items-center text-white ${(currentDiv === 2 && !(sessionComplete)) ? 'block' : 'hidden'}`}>
          <div className="text-xl font-extrabold">Do you have access to:</div>
          <div className="flex flex-col items-center">
            <button className="bg-sky-400 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto font-extrabold" onClick={()=> setCurrentDiv('coldPlunge')}>Cold Plunge</button>
            <button className="bg-sky-600 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto font-extrabold" onClick={()=> setCurrentDiv('coldShower')}>Cold Shower</button>
            <button className="bg-sky-400 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto font-extrabold" onClick={()=> setCurrentDiv('bathTub')}>Bath Tub & Some Ice</button>
            <button className="bg-sky-500 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto font-extrabold" onClick={()=> setCurrentDiv('cryotherapy')}>Cryotherapy</button>
          </div>
          <div className="text-xl font-extrabold mt-4 text-center py-2">Otherwise, click below to <span className="underline">find</span>:</div>
          <div className="flex flex-col items-center">
            <button className="bg-sky-400 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto font-extrabold" onClick={()=> setCurrentDiv('findNaturalCold')}>Natural Cold Body of Water Near You</button>
            <button className="bg-sky-200 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto font-extrabold" onClick={()=> setCurrentDiv('findColdPlunge')}>Cold Plunge Services Near You</button>
            <button className="bg-sky-500 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto font-extrabold" onClick={()=> setCurrentDiv('findCryo')}>Cryotherapy Near You</button>
            <button className="bg-sky-100 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto font-extrabold" onClick={()=> setCurrentDiv('buyIce')}>Bath tub and no Ice? Buy some Ice</button>
            <button className="bg-sky-600 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-2 w-full md:w-auto font-extrabold" onClick={()=> setCurrentDiv('findNeighborPlunge')}>Find A Neighbor with a Cold Plunge</button>
          </div>
        </div>
        <div className={`flex flex-col items-center text-white ${(currentDiv === 'coldPlunge' && !(sessionComplete)) ? 'block' : 'hidden'}`}>
          <div className="text-xl font-extrabold pb-2">Lets Start Cold Plunge <div className="animate-shiver text-center">🥶</div></div>
          <div className="flex flex-col items-center">
            <div className="font-bold"> Step 1: </div>
            <div className="font-bold"> Make sure your water is as cold as you can bear; remember discomfort is crucial to the process </div>
            <div className="font-bold"> Step 2: </div>
            <div className="font-bold"> Get into the cold plunge and submerge up to your neck </div>
            <div className="font-bold"> Step 3: </div>
            <div className="font-bold"> How long can you go for? </div>
          </div>
          {
          !(timerSelected) && !(sessionComplete) &&
            <div className="flex flex-wrap w-full place-content-center">
              <button className="bg-sky-400 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-1 md:w-auto" onClick={()=> setTimer({minutes: 0, seconds: 30})}>30 sec</button>
              <button className="bg-sky-400 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-1 md:w-auto" onClick={()=> setTimer({minutes: 2, seconds: 0})}>2 mins</button>
              <button className="bg-sky-500 rounded-full py-2 px-4 my-2 text-black hover:bg-gray-200 mx-1 md:w-auto" onClick={()=> setTimer({minutes: 3, seconds: 0})}>3 mins</button>
              <button className="bg-sky-600 rounded-full py-2 px-4 my-2 text-white hover:bg-gray-200 mx-1 md:w-auto" onClick={()=> setTimer({minutes: 5, seconds: 0})}>5 mins</button>
              <button className="bg-sky-700 rounded-full py-2 px-4 my-2 text-white hover:bg-gray-200 mx-1 md:w-auto" onClick={()=> setTimer({minutes: 10, seconds: 0})}>10 mins</button>
              <button className="bg-sky-800 rounded-full py-2 px-4 my-2 text-white hover:bg-gray-200 mx-1 md:w-auto" onClick={()=> setTimer({minutes: 15, seconds: 0})}>15 mins</button>
            </div>
          }
          {
            timerSelected && !(sessionComplete) && <Timer minutes={time.minutes} seconds={time.seconds} setTimerSelected={setTimerSelected} setSessionComplete={setSessionComplete}/>
          }          
        </div>
        {
            sessionComplete &&
              <div className="text-white">
                <div className="text-center text-3xl">👏👏👏 </div>
                <div className="font-extrabold text-center">
                  Congratulations you savage! 
                  How good do you feel right now?
                </div>
                <div className="text-center pt-4">
                  <div className="text-lg font-extrabold">
                    Streak Count
                  </div>
                  <div className="text-3xl font-extrabold">
                    1
                  </div>
                  <div className="text-xl font-extrabold">
                    day
                  </div>
                </div>
                <div className="p-2">
                  <div className="text-xl font-medium">Join the Community, Track Your Progress & Earn Tokens!</div>
                  <div className="bg-blue-800 p-2 m-2 rounded-lg text-center font-extrabold">Sign Up For Free</div>
                  <div className="text-base font-light p-2">
                    <ul className="list-disc">
                      <li>Just your email - we're passwordless!</li>
                      <li>Everything will always be free</li>
                      But this way
                      <li>Track your progress</li>
                      <li>Connect with like-minded, super supportive community of individuals</li>
                      <li>Earn tokens and win rewards</li>
                      <li>Get major perks and benefits</li>
                      <li>Have a direct line of communication with us the devs!</li>
                      <li>Good Vibes only!</li>
                    </ul> 
                    <div>Lets enbark on our journey towards self-improvement, self-mastery, and optimizing our health and wellbeing together!</div> 
                  </div>
                  <div className="bg-green-600 p-2 m-2 rounded-lg text-center font-extrabold" onClick={()=>buyUsACoffee()}>Buy Us a Coffee ☕ </div>
                  <div className="mt-4 text-base font-light">
                    <ul className="list-disc">
                     <li>Or some pizza 🍕</li>
                     <li>We are entierly self bootstrapped</li>
                     <li>Your act of kindness, greatly fuels our development flow!</li>
                     <li>And earns you tokens.</li>
                     <li>Among other things, tokens can be used to suggest new features, vote on podcasts and protocols you'd like to see integrated into the app. This way we can prioritize the right features!</li> 
                    </ul>
                  </div>
                  <div className="mt-4 text-base font-light">
                    Let's grow and celebrate the journey together!
                  </div>
                  <div className="bg-blue-800 p-2 m-2 rounded-lg text-center font-extrabold">Sign Up For Free</div>
                  <div className="text-center">OR</div>
                  <div className="pt-2 font-bold text-center" onClick={() => setSelectedId(null)}>Explore more protocols.</div>
                </div>                
              </div>

          }
      </div>
    )
}

export default ColdWater;