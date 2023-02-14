import React, { useState, useEffect } from 'react'
  
const Timer = ({ minutes, seconds, setTimerSelected, setSessionComplete }) => {
  const [time, setTime] = useState({ minutes, seconds });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      //timer is over
      if (time.minutes <= 0 && time.seconds <= 0 ){
        if (interval !== null) {
          clearInterval(interval);
        }
        setIsRunning(false);
        setSessionComplete(true);
      }
      //timer is running
      interval = setInterval(() => {
        setTime((prevTime) => {
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
    } else if (!isRunning && time.minutes === 0 && time.seconds === 0) {
      if (interval !== null) {
        clearInterval(interval);
      }
    }
    return () => {
      if(interval !== null){
        clearInterval(interval);
      }
    }
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime({ minutes, seconds });
    setIsRunning(false);
  };

  //const totalSeconds = time.minutes * 60 + time.seconds
  //const progress = Math.round(((time.minutes * 60 + time.seconds) / (minutes * 60 + seconds)) * 1000 / 100) * 100

  //const color = `bg-red-${progress}`;
  //console.log(color)
  //console.log(progress)

  return (
    <div className="flex flex-col items-center p-4">
      <div className='flex'>
        <div className='text-xl pt-8 -ml-10 pr-3' onClick={() => setTimerSelected(false)}>
          ⬅️
        </div>
        <div className={`w-24 h-24 rounded-full bg-blue-400 border-2 border-white animate-pulse text-center text-xl p-4 pt-8`}>
          <div>
            {time.minutes.toString().padStart(2, '0')}:
            {time.seconds.toString().padStart(2, '0')}
          </div>
        </div>
      </div>
      
      
      <div className="flex mt-6">
        <button
          className="px-4 py-2 rounded-full bg-blue-500 text-white mr-2"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="px-4 py-2 rounded-full bg-gray-500 text-white mr-2"
          onClick={handleStop}
        >
          Stop
        </button>
        <button
          className="px-4 py-2 rounded-full bg-red-500 text-white"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
  </div>
);
};

export default Timer;
