import { sleep } from "./delay";
import { handleSwap } from "./helper";
let swapCount
let compCount
let sorted 
const rightshift = (arr, start, end) => {
  for (let i = end; i > start; i--) {
    arr[i] = arr[i - 1];
  }
}
// Helper function to merge two halves
async function merge(arr, i, j, size1, size2, setArr, setSwapping, delayRef, setComp, resetRef, setSwaps, setSorted, setIsSwapping,
  setSwapStyles,
  divRef,
  highlightRef) {

  if (resetRef.current) {

    return;
  }
  let n = arr.length;
  let iMove = 0;
  let jMove = 0;
  let z = 0;
  while (iMove < size1 && jMove < size2) {
    const left = i + iMove,
      right = j + jMove;
    compCount++;
    setComp(compCount);
    setSwapping([left, right]);
    await sleep(highlightRef.current);
    if (resetRef.current) {

      return;
    }
    if (arr[left] <= arr[right]) {
      iMove++;
      if (size1 + size2 === arr.length) {
        sorted.push(z++);
        setSorted([...sorted]);
      }
    }

    if (arr[left] > arr[right]) {
      handleSwap(left, right, divRef, setIsSwapping, setSwapStyles);
      await sleep(delayRef.current);
      swapCount++;
      setIsSwapping(false); 
        setSwapStyles({});
      const value = arr[right];
      rightshift(arr, left, right);
      arr[left] = value;
      i++;
      jMove++;
      setArr([...arr]);
      setSwaps(swapCount);
      if (size1 + size2 === arr.length) {
        sorted.push(z++);
        setSorted([...sorted]);
      }
      await sleep(highlightRef.current);
    }
    setSwapping([]);
    await sleep(highlightRef.current);
    if (resetRef.current) {

      return;
    }
  }

 

  for (let k = j + jMove; k < j + size2; k++) {
    setSwapping([j]);
    if (size1 + size2 === arr.length) {
      setSwapping([])
      sorted.push(z++);
      setSorted([...sorted]);
      
    }
    await sleep(highlightRef.current);
    setSwapping([]);
    await sleep(highlightRef.current)
    if (resetRef.current) {

      return;
    }
  }
  for (let k = i + iMove; k < i + size1; k++) {
    setSwapping([i]);
    if (size1 + size2 === arr.length) {
      sorted.push(z++);

    setSwapping([])
      setSorted([...sorted]);
      console.log(i);
    }
    await sleep(highlightRef.current);
    setSwapping([])
    await sleep(highlightRef.current);
    if (resetRef.current) return 
  }
  // if (size1 + size2 === arr.length) {
  //   for (let i = 0; i < arr.length; i++)
  //     sorted.push(i);
  //   setSorted([...sorted]);
    
  // }
}


export async function mergeSort(arr, setArr, setSwapping, delayRef, setSwaps, setComp, setSorted, resetRef, setPlay, setIsSwapping,
  setSwapStyles,
  divRef,
  highlightRef) {
  swapCount = 0;
  compCount = 0;
  sorted = [];

  const animate = async (i, j) => {
    if (resetRef.current) return;

    if (i >= j) return;

    const mid = Math.floor((i + j) / 2);

    await animate(i, mid);
    if (resetRef.current) {

      return;
    }

    await animate(mid + 1, j);
    if (resetRef.current) {

      return;
    }

    await merge(arr, i, mid + 1, mid - i + 1, j - mid, setArr, setSwapping, delayRef, setComp, resetRef, setSwaps, setSorted, setIsSwapping,
      setSwapStyles,
      divRef,
      highlightRef);
    if (resetRef.current) {

      return;
    }


  };

 await animate(0, arr.length - 1).then(() => {
    resetRef.current = false

  });
}