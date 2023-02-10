import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import './App.css'
import TextInput from './components/TextInput';

function App() {
  const inputsRef = useRef([]);
  const [inputs, setInputs] = useState([]);
  const formRef = useRef();

  const addTwoMoreInputs = useCallback(() => {//O(n)
    setInputs([
      ...inputs,
      <TextInput key={inputs.length} inputRef={(input)=> (inputsRef.current[inputs.length] = input)} name={inputs.length}/>,
      <TextInput key={inputs.length+1} inputRef={(input)=> (inputsRef.current[inputs.length + 1] = input)} name={inputs.length + 1}/>,
    ]);
  }, [inputs, setInputs])

  const handleSubmit = (e) => {//O(n)
    const formData = new FormData(formRef.current);
    e.preventDefault();
    for (const value of formData.values()) {
      console.log(`${value}\n`);
  }
  }
  return (
    <div className="App">
      <form onSubmit={(e)=> handleSubmit(e)} ref={formRef}>
        {inputs}
        <button type='button' onClick={()=> addTwoMoreInputs()}>Add 2 more inputs</button>
        <button type='submit'>Log values</button>
      </form>
    </div>
  )
}

export default App
