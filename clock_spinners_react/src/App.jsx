import { useEffect, useRef, useState } from 'react'
import './App.css'
import InputSpinner from './components/InputSpinner/InputSpinner'

function App() {
  const hourInputRef = useRef();
  const minuteInputRef = useRef();
  const [angleDifference, setAngleDifference] = useState(0);

  const valueHandler = (direction, ref, min, max) => {//O(n)
    const refValueInteger = parseInt(ref.current.value);
    if(direction === '-' && refValueInteger !== min ) {
      ref.current.value = refValueInteger - 1;
    } else if (direction === '+' && refValueInteger !== max) {
      ref.current.value = refValueInteger + 1;
    }

    const handsAngles = [calculateHandAngle(12, hourInputRef.current.value), calculateHandAngle(60, minuteInputRef.current.value)].sort((a, b)=> a - b);//O(n)
    setAngleDifference(handsAngles[1] - handsAngles[0]);
  }

  const calculateHandAngle = (fractions, value) => {//O(1)
    return 360 / fractions * value;
  }

  useEffect(()=>{console.log(hourInputRef.current)}, [hourInputRef])
  return (
    <div className="App">
      <div>
        <InputSpinner title='Hour Input' ref={hourInputRef} valueHandler={valueHandler} min={0} max={11}/>
        <InputSpinner title='Minutes Input' ref={minuteInputRef} valueHandler={valueHandler} min={0} max={59}/>
      </div>
      <h4>The difference between angles of the hands of the clock is {angleDifference} degrees</h4>
    </div>
  )
}

export default App
