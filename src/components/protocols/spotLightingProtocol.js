/**
 * Tool 23:
Spotlighting

How to:
look at a specific thing; anything; could be your hand, could be a random object near you
for a minute or more the longer the better

Effects:
increase focus
maintain increased focus for longer
activated a medly of neurochemicals:
increases dopamine
increases epinepherine
puts you into a state of readiness and clear focus
 */

import { useState, useEffect } from "react";
import { BiExpand, BiCollapse } from "react-icons/bi";
import Link from "next/link";
import { Transition } from "@headlessui/react";

import MagicButton from "../UI/magicButton";

const SpotLightingProtocol = ({ setSelectedId, randomizeProtocol }) => {

    const [currentView, setCurrentView] = useState(1)
    const [timer, setTimer] = useState({minutes: 0, seconds: 0})
    const [isRunning, setIsRunning] = useState(false)
    const [isFullScreen, setIsFullScreen] = useState(false)


    const handleStart = () => {
        setCurrentView(currentView +1)
        setIsRunning(true)
    };

    const handelTimerClick = ({minutes, seconds}) => {
        setTimer({minutes, seconds})
        setCurrentView(currentView +1)
    }

    /*const toggleFullScreen = () => {
        if(typeof document !== 'undefined' && !document.fullscreenElement){
            setIsFullScreen(true)
            document.documentElement.requestFullscreen();
        }
        else{
            setIsFullScreen(false)
            if(typeof document !== 'undefined' && document.exitFullscreen){
                document.exitFullscreen();
            }
        }
    }

    useEffect(() => {
        toggleFullScreen()
    }, [toggleFullScreen])*/

    useEffect(() => {
        let interval = null;
        if (isRunning) {
          //timer is over
          if (timer.minutes <= 0 && timer.seconds <= 0 ){
            if (interval !== null) {
              clearInterval(interval);
            }
            setIsRunning(false);
            setCurrentView(currentView +1);
          }
          //timer is running
          interval = setInterval(() => {
            setTimer((prevTime) => {
              const newMinutes =
                prevTime.seconds === 0
                  ? prevTime.minutes - 1
                  : prevTime.minutes;
              const newSeconds =
                prevTime.seconds === 0
                  ? 59
                  : prevTime.seconds - 1;
              return { minutes: newMinutes, seconds: newSeconds };
            });
          }, 1000);
        } else if (!isRunning && timer.minutes === 0 && timer.seconds === 0) {
          if (interval !== null) {
            clearInterval(interval);
          }
        }
        return () => {
          if(interval !== null){
            clearInterval(interval);
          }
        }
      }, [isRunning, timer]);

    return (
        <div className="w-96">
            <div className="absolute right-5 top-5">
                {/* typeof document !== 'undefined' && document.fullscreenElement && <div onClick={toggleFullScreen}><BiCollapse /> Exit Full Screen</div>*/}
            </div>
            <Transition
            show={currentView == 1}
            enter="transistion ease-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transistion ease-in duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            > 
                <div>
                    <div className="text-center font-extrabold text-3xl p-2">Spotlighting</div>
                    <div className="pb-2 text-center font-extrabold"> Olympic Level Focus: get into a state of readiness and clear focus </div>
                    <div><img src={`/images/spotlightFocus.png`} alt={'Spotlight Focus Image'} className="rounded-xl shadow-2xl" /></div>            
                    
                    <div className="bg-onyx-black shadow-2xl rounded-xl text-white mt-4
                    p-4">
                        <div className="pb-1 font-extralight text-center"> In this protocol you will see a shape</div>
                        <div className="pb-1 font-extralight text-center"> Focus on the shape for the duration of the timer</div>
                        <div className="pb-1 font-extralight text-center"> Let's start by picking a time; remember start slow...</div>
                        <div className="flex flex-wrap place-content-center p-2">
                            <div className="text-black font-bold rounded-2xl p-2 m-2 bg-bito-white shadow-2xl cursor-pointer" onClick={() => handelTimerClick({minutes: 0, seconds:30})}>30 sec</div>
                            <div className="text-black font-bold rounded-2xl p-2 m-2 bg-bito-white shadow-2xl cursor-pointer" onClick={() => handelTimerClick({minutes: 0, seconds:45})}>45 sec</div>
                            <div className="text-black font-bold rounded-2xl p-2 m-2 bg-bito-white shadow-2xl cursor-pointer" onClick={() => handelTimerClick({minutes: 0, seconds:60})}>1 min</div>
                            <div className="text-black font-bold rounded-2xl p-2 m-2 bg-bito-white shadow-2xl cursor-pointer" onClick={() => handelTimerClick({minutes: 1, seconds:30})}>1min 30 sec</div>
                            <div className="text-black font-bold rounded-2xl p-2 m-2 bg-bito-white shadow-2xl cursor-pointer" onClick={() => handelTimerClick({minutes: 2, seconds:0})}>2 min</div>
                            <div className="text-black font-bold rounded-2xl p-2 m-2 bg-bito-white shadow-2xl cursor-pointer" onClick={() => handelTimerClick({minutes: 3, seconds:0})}>3 min</div>
                        </div>
                    </div>
                </div>
            </Transition>
            <Transition
            show={currentView == 2}
            enter="transistion ease-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transistion ease-in duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            >
                <div className="text-center bg-onyx-black shadow-2xl rounded-xl text-white mt-4
                p-4 text-xl">
                    {/*
                    <div> On a computer?</div>
                    <div>Go full screen for best results</div>
    <div className="mx-auto mt-3 mb-3 flex place-content-center p-2 bg-bito-white text-black w-36 rounded" onClick={toggleFullScreen}> {typeof document !== 'undefined' && document.fullscreenElement ? <div className="flex">Exit Full Screen <div className="pt-1 pl-1"><BiExpand /></div></div> : <div className="flex">Full Screen <div className="pt-1 pl-1"><BiExpand /></div></div>}</div>*/}
                    <div className="text-left">
                        <div className="p-1"> Remember... </div>
                        <div className="p-1"> Don't worry about the time, it will run in the background</div>
                        <div className="p-1"> Breathe normally</div>
                        <div className="p-1"> Relax</div>
                        <div className="p-1"> Focus on the shape</div>
                        <div className="p-1"> If you lose focus, just refocus</div>
                        <div className="p-1"> Losing focus and refocusing is part of the exercise</div>
                        <div className="text-xl flex place-content-center pt-3">
                            <MagicButton submitHandler={handleStart} label={"Lets Start"} size={'text-xl'} color={'green'}/>
                        </div>
                    </div>
                </div>
            </Transition>
            <Transition
            show={currentView == 3}
            enter="transistion ease-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transistion ease-in duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            >
                <div>
                    <img src={`/images/spotlightFocus/obj0.png`} alt={'Spotlight Focus Image'} className="rounded-xl shadow-2xl" />
                </div>
            
            </Transition>
            <Transition
            show={currentView == 4}
            enter="transistion ease-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transistion ease-in duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            >
                <div>
                    <div className="text-center mt-2 text-2xl font-extrabold">
                        <div>Congratulations!</div>
                        <div>1</div>
                        <div>Day Streak Complete</div>
                        <div>Complete</div>
                    </div>
                    <div className="bg-onyx-black shadow-2xl rounded-xl text-white mt-4 p-4 text-xl">
                        <div>What is going on in your body?</div>
                        <div>✔️ Dopamine released</div>
                        <div>✔️ Epinepherine released</div>
                        <div>✔️ Pain Tolerance Increased</div>
                        <div>✔️ Focus Increased</div>
                        <div>✔️ If you were to go on a run, you would be able to run 25% faster</div>
                    </div>
                    <div className="p-2 pt-6 pb-6">
                        <div className="text-xl font-medium text-center">Join the Community, Track Your Progress & Earn Tokens <span className='underline'>completely Free!</span></div>
                        <div className="text-white bg-nft-blue p-2 m-2 rounded-lg text-center font-extrabold "><Link href="/signup">Sign Up For Free</Link></div>
                        <div className="text-base font-light p-2">
                            <ul className="list-disc">
                            <li>Just your email - we're passwordless!</li>
                            <li>Everything will always be free</li>
                            <div className="underline">But this way...</div>
                            <li>Track your progress</li>
                            <li>Connect with like-minded, super supportive community of individuals</li>
                            <li>Earn tokens and win rewards</li>
                            <li>Get major perks and benefits</li>
                            <li>Have a direct line of communication with us the devs!</li>
                            <li>Good Vibes only!</li>
                            </ul> 
                            <div>Lets enbark on our journey towards self-improvement, self-mastery, and optimizing our health and wellbeing together!</div> 
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
        
    )
}

export default SpotLightingProtocol