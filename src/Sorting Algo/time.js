

export const startTimer = (isRunning,setIsRunning,setTimerId,time,setTime,idTime) => {
    if (!isRunning) {
      setIsRunning(true);
      const start = Date.now() - time; // Adjust for the current time
       idTime.current = setInterval(() => {
        setTime((Date.now() - start));
      }, 100); // Update time every 100 milliseconds
        setTimerId(idTime.current);
        console.log(idTime.current);
    }
  };

// Stop the stopwatch
export const stopTimer = (setIsRunning,idTime) => {
    
        clearInterval(idTime.current); // Stop the timer
        setIsRunning(false);     // Update the state
              // Reset the timer ID
        console.log('Timer stopped');
      
  
};

// Reset the stopwatch
export const resetTimer = (timerId,setIsRunning,setTime) => {
  clearInterval(timerId);
  setIsRunning(false);
  setTime(0);
};