
import React, {  useState } from 'react';
import './Lights.css';
import Lights from './Lights';

export default function LightsDisplay() {
    const colors = ['red', 'yellow', 'green']
    const [light, setLight] = useState(null)
    
        const redLight=()=>{
            setLight('yellow');
            setTimeout(()=>{setLight('red')},2000)
            
        }
        const greenLight=()=>{
            setLight('yellow');
            setTimeout(()=>{setLight('green')},2000)
        }
        // useEffect(()=>{
        //     redLight();
        // })
   
    return (
        <div>
            <div >
                {colors.map((color) => {
                    return (<Lights color={color} light={light}  />
                    )
                }
                )}
            </div>
            <div className='buttons'>
                <button onClick= {redLight} className='button'>Stop</button>
                {/* // <button onClick={() => setLight('yellow')} className='button'>Ready</button> */}
                <button onClick={greenLight} className='button'>Go</button>
            </div>
        </div>
    )
}
