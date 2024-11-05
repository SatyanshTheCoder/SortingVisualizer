import { sleep } from "./delay";
import { handleSwap } from "./helper";

export async function selectionSort(
  arr,
  setArray,
  setSwapping,
  delayRef,
  setSwaps,
  setComp,
  setSorted,
  resetRef,
  setPlay,
  minIdx,
  setMinIdx,
  setIsSwapping,
  setSwapStyles,
  divRef,
  highlightRef
) {
  let swapRef = 0;
  let compRef = 0;
  const n = arr.length;
  let sortedArr = [];

  const animate = async () => {
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      setMinIdx([minIndex]);

      for (let j = i + 1; j < n; j++) {
        if (resetRef.current) {
          resetRef.current = false;
          return;
        }

       
        compRef += 1;
        setComp(compRef);
        setSwapping([j]);
        await sleep(highlightRef.current);  

        if (resetRef.current) {
          resetRef.current = false;
          return;
        }

        if (arr[j] < arr[minIndex]) {
          minIndex = j;
          setMinIdx([minIndex]);
        }

        setSwapping([]);
      }

      if (minIndex !== i) {
        setSwapping([i, minIndex]);  
        handleSwap(i, minIndex, divRef, setIsSwapping, setSwapStyles);
        await sleep(delayRef.current);  
        if (resetRef.current) {
          resetRef.current = false;
          return;
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        swapRef += 1;
        setSwaps(swapRef);
        setArray([...arr]);

       
        setSwapping([]);
        setIsSwapping(false);
        setSwapStyles({});

        if (resetRef.current) {
          resetRef.current = false;
          return;
        }
      }

    
      sortedArr.push(i);
      setSorted([...sortedArr]);
      
    }

   
    sortedArr.push(n - 1);
    setMinIdx([]);
    setSorted([...sortedArr]);
  };

  await animate();
}
