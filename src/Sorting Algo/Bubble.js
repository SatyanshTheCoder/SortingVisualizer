import { sleep } from "./delay";
import { handleSwap } from "./helper";
export async function bubbleSort(
  arr,
  setArray,
  setSwapping,
  delayRef,
  setSwaps,
  setComp,
  setSorted,
  resetRef,
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
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (resetRef.current) {
          resetRef.current = false;
          return;
        }
        
        
        
        compRef += 1;
        setComp(compRef);
        setSwapping([j, j + 1]);
        if (resetRef.current) {
          resetRef.current = false;
          return;
        }
        await sleep(highlightRef.current);
        if (resetRef.current) {
          resetRef.current = false;
          return;
        }
        if (arr[j] > arr[j + 1]) {
          handleSwap(j, j + 1, divRef, setIsSwapping, setSwapStyles);
          await sleep(delayRef.current);
          if (resetRef.current) {
            resetRef.current = false;
            return;
          }
          // swapping elements
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapRef += 1;
          setIsSwapping(false);
          setSwapStyles({});
          setSwaps(swapRef);

          setArray([...arr]);
          await sleep(highlightRef.current);
          if (resetRef.current) {
            resetRef.current = false;
            return;
          }
        }

        setSwapping([]);
        await sleep(highlightRef.current);
        if (resetRef.current) {
          resetRef.current = false;
          return;
        }
      }
      sortedArr.push(n - i - 1);
      setSorted([...sortedArr]);
    }
    sortedArr.push(0);
    setSorted([...sortedArr]);
  };
  await animate();
}
