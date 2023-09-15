import React ,{useRef,useState,useEffect} from 'react';
import '../styles/App.css';


const InputField=React.forwardRef((props,ref)=>{
    return(
    <div>
      <input id="input" type="text"  ref={ref}/>
    </div>
    )
    })
export default InputField;
