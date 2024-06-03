import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const UniConverter =(propos) =>{
    const {handleInputChange,inputValue}=propos;
    return(
        <div className="converter">
            <div className='flex-1'>
              <div className='converter-title'>Set</div>
              <input type='number' className='input-number' min={0} onChange={handleInputChange} value={inputValue}/>
            </div>

            <span className='angle-icon fa-2x' style={{marginTop:"30px"}}>
                <FontAwesomeIcon icon={['fas','angle-right']}/>
            </span> 

            <div className='text-right flex-1'>
            <div className='converter-title'>Show</div>
            <input type='number' className='input-number text-right' value={inputValue/8} disabled/>
            </div>
          </div>
    )
}
export default UniConverter;
