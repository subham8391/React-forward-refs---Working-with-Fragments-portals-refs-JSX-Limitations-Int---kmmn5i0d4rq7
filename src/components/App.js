import React ,{useRef,useState,useEffect} from 'react'
import '../styles/App.css';
import InputField from './InputField.js';
const App = () => {
 
  const inputRef = useRef(null); 
  const textareaRef = useRef(null); 
  const [values, setValues] = useState(''); 

  const settingValue = () => {
    setValues(inputRef.current.value);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };



 
  return (
    <div>
    <InputField ref={inputRef} /> 
      <br />
      <button id="settingValueButton" onClick={settingValue}>
        Set Value
      </button>
      <button id="focusInputButton" onClick={focusInput}>
        Focus the input
      </button>
      <br /><br />
      <textarea id="textarea" value={values} ref={textareaRef}></textarea>
    </div>
  );
}


export default App;
