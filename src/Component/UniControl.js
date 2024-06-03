import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const UniControl =()=> (
    <div className="unit-control">
              <div className="unit">Mbps</div>
                <span className='exchange-icon fa-fw fa-stack'>
                  <FontAwesomeIcon icon={['fas','exchange-alt']} className="fa-stack-1px"/>
                </span>
                
              <div className="unit">MB/s</div>  
    </div>
  );
  
export default UniControl;  