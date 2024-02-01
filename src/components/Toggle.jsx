import { useState } from 'react';

export default function Toggle() {
 const [isOn, setIsOn] = useState(true);

  return (
    <button onClick={() => {
      setIsOn(!isOn);
    }}>
      {isOn ? 'On' : 'Off'}
    </button>
  );
}
