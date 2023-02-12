import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { jsx, Global, ClassNames } from '@emotion/react'
import { cx, css } from '@emotion/css'

const circleVariants = {
  start: {
    background: '#0b3d91'
  },
  end: {
    background: '#FFFFFF'
  }
};

const circleTransition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const ProgressCircle = () => {
    const controls = useAnimation()
  
    useEffect(() => {
      controls.start('end')
    }, [controls])
  
    return (
      <motion.div
        className={cx(
          'rounded-full h-16 w-16',
          css`
            background: #0b3d91;
          `
        )}
        variants={circleVariants}
        animate={controls}
        transition={{
          duration: 1
        }}
      ></motion.div>
    )
  }
  
  
  

const Timer = ({ minutes, seconds }) => {
  const [time, setTime] = useState({ minutes, seconds });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
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
      clearInterval(interval);
    }
    return () => clearInterval(interval);
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

  const totalSeconds = time.minutes * 60 + time.seconds;
  const progress = (totalSeconds / (minutes * 60 + seconds)) * 100;

  return (
    <div className="flex flex-col items-center p-4">
      <ProgressCircle progress={progress} />
      <div className="text-center text-xl mt-4">
        {time.minutes.toString().padStart(2, '0')}:
        {time.seconds.toString().padStart(2, '0')}
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
