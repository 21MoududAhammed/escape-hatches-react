import { useRef } from "react";

export default function CounterWithUseRef(){
    let count = useRef(0);
    function handleCount(){
        count.current = count.current + 1;
    }
    console.log(count);
    return (
        // useRef is not a cause of rendering that's why it won't update 
        <button onClick={handleCount}>Increase  with UseRef {count.current}</button>
    );
}