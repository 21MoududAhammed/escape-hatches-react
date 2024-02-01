import { useRef,useState } from "react";


export default function TimeSpan(){
  const [startTime, setStartTime] = useState(null);
  const [now, setNow ] = useState(null);
  let intervalRef = useRef(null)
  function handleStart(){
    setStartTime(Date.now());
    setNow(Date.now());

   intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop(){
    clearInterval(intervalRef.current);
  }

    let secondPassed = 0;

    if(startTime !== null && now !== null){
      secondPassed =( now - startTime)/1000;
    }
 
  return(
    <div>
      <h1>Time Passed : {secondPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop </button>
    </div>
  )
}