export const setDelay =(isOn,val ,delayRef,highlightRef) => {
    

    
    if (isOn) {
        const newDelay = 2000 / val
   
        delayRef.current = newDelay;
    } else {
        const newDelay = 2000 / (val*4);
        delayRef.current = newDelay;
    }
    const newDelay = 2000 / (val*4);
    highlightRef.current = newDelay;

    console.log(delayRef.current, highlightRef.current);
}