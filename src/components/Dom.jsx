import { useRef } from "react";

export default function Dom(){
    const inputRef = useRef(null);
    function handleFocus(){
        inputRef.current.focus();
    }
    return (
        <>
        <input type="text" ref={inputRef} />
        <button onClick={handleFocus}>Focus </button>
        </>
    );
}