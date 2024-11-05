export const handleSwap = (i,j,divRef,
    setIsSwapping,
    setSwapStyles
   ) => {
    
        const element1 = divRef.current[i];
        const element2 = divRef.current[j];

        if (element1 && element2) {
            const rect1 = element1.getBoundingClientRect();
            const rect2 = element2.getBoundingClientRect();

            const deltaX = rect2.left - rect1.left;
         
            const swapAnimation1 = `
          @keyframes swap1 {
            25% { transform: translateY(${-55}px); }
            75% { transform: translate(${deltaX}px, ${-55}px); }
            100% { transform: translate(${deltaX}px, 0); }
          }
        `;
            const swapAnimation2 = `
          @keyframes swap2 {
            25% { transform: translateY(${55}px); }
            75% { transform: translate(${-deltaX}px, ${55}px); }
            100% { transform: translate(${-deltaX}px, 0); }
          }
        `;
        const swapAnimation3 = `
        @keyframes swap3 {
          
         100% { transform: translateX(${-54}px); }
         
        }
      `;

            setSwapStyles({ swapAnimation1, swapAnimation2, swapAnimation3});
            setIsSwapping(true);

        }
    
}