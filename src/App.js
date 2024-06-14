import CardFooter from './Component/CardFooter';
import './App.css';
import { Children, useState } from 'react';
import UniControl from './Component/UniControl';
import UniConverter from './Component/UnitConverter';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';



library.add(fab,fas,far)

function App() {
  const [inputValue,setInputValue] =useState(0);
  const handleInputChange =(e)=>{
  
    const {value}=e.target;
    setInputValue(value);
  };
  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
        <div className="card-body">
          <UniControl />
          <UniConverter   
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          />
      </div>
           <CardFooter inputValue={inputValue}/>
    </div>
  );
}

export default App;
