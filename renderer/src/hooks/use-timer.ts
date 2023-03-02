import { useEffect, useState } from 'react';

export const useTimer = () => {
  const [timer, setTimer] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive && timer > 0) {
      const interval = setInterval(() => {
        setTimer((time) => time - 1);
      }, 1000);

      return () => clearInterval(interval);
    }

    if (timer === 0) {
      setIsActive(false);
    }
  }, [timer, isActive]);

  const getMinute = (timer: number) => {
    const min = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${min < 10 ? '0' + min : min}:${
      seconds < 10 ? '0' + seconds : seconds
    }`;
  };

  const toggleClock = () => {
    setIsActive(!isActive);
  };

  const restartTimer = () => {
    setTimer(10);
  };

  const onStartNewSession = () => {
    setIsActive(!isActive);
    setTimer(timer);
  };

  return {
    timer,
    setTimer,
    getMinute,
    toggleClock,
    isActive,
    setIsActive,
    restartTimer,
    onStartNewSession,
  };
};
