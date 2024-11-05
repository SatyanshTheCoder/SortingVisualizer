import { sleep } from "./delay";

import { handleSwap } from "./helper";
export async function insertionSort(
  arr,
  setArray,
  setSwapping,
  delayRef,
  setSwaps,
  setComp,
  setSorted,
  resetRef,
  setPlay,
  setIsSwapping,
  setSwapStyles,
  divRef,
  highlightRef
) {
  let swapRef = 0;
  let compRef = 0;
  let n = arr.length;
  let sortedArr = [];

  const animate = async () => {
    for (let i = 1; i < n; i++) {
      let keyIndex = i;
      let key = arr[i];

      for (let j = i - 1; j >= 0; j--) {
        if (resetRef.current) {
          resetRef.current = false
          return;
          
        }

        // Highlight the current and comparing elements
        setSwapping([keyIndex, j]);
        await sleep(highlightRef.current);
        if (resetRef.current) {
          resetRef.current = false;
          return;
        }
        compRef += 1;
        setComp(compRef); // Track comparisons

        if (arr[j] > key) {
          handleSwap(keyIndex, j , divRef, setIsSwapping, setSwapStyles)
         
          await sleep(delayRef.current);
          if (resetRef.current) {
            resetRef.current = false
            return;
            
          }
          const temp = arr[keyIndex];
          arr[keyIndex] = arr[j];
          arr[j] = temp;
          keyIndex = j;
          swapRef += 1;
          setSwaps(swapRef); // Track swaps
          setArray([...arr]); // Update the array in the UI
          setIsSwapping(false);
          setSwapStyles({});

          if (resetRef.current) {
            resetRef.current = false;
            return;
          }
        } else {
          break;
        }

        setSwapping([]);
        await sleep(highlightRef.current);
        if (resetRef.current) {
          resetRef.current = false;
          return;
        }
      }

      // Place the key in its correct position
      arr[keyIndex] = key;
      setArray([...arr]); // Update the array in the UI

      // Mark the sorted part of the array
      setSwapping([]);
      sortedArr.push(0);
      sortedArr.push(i);
      setSorted([...sortedArr]);
      await sleep(delayRef.current);
      if (resetRef.current) {
        resetRef.current = false;
        return;
      }
    }
    sortedArr.push(n - 1); // Ensure the last element is marked as sorted
    setSorted([...sortedArr]);
    if (resetRef.current) {
      resetRef.current = false;
      return;
    }
  };

 await animate();
}
