import { useState, useEffect } from 'react';

const useIdle = (timeout: number): boolean => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let idleTimer: number;

    const handleIdle = (deadline: IdleDeadline) => {
      if (deadline.timeRemaining() > 0) {
        setIsIdle(true);
      }
    };

    const handleActive = () => {
      setIsIdle(false);
      // Request the next idle callback after the specified timeout
      idleTimer = requestIdleCallback(handleIdle, { timeout });
    };

    // Initial idle check when the component mounts
    idleTimer = requestIdleCallback(handleIdle, { timeout });

    // Attach event listeners for activity detection
    document.addEventListener('mousemove', handleActive);
    document.addEventListener('keydown', handleActive);
    document.addEventListener('visibilitychange', handleActive);

    return () => {
      // Cleanup: remove event listeners and cancel any pending idle callbacks
      document.removeEventListener('mousemove', handleActive);
      document.removeEventListener('keydown', handleActive);
      document.removeEventListener('visibilitychange', handleActive);
      cancelIdleCallback(idleTimer);
    };
  }, [timeout]);

  return isIdle;
};

export default useIdle;
