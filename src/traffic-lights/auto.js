import React, {  useEffect,useState } from 'react';
import Lights from './Lights';


export default function Auto() {
    const [signalIndex, setSignalIndex] = useState(0);
    const initialLightStatus = {
        yellow: false,
        red: false,
        green: false
    }
    const [lightStatus, setLightStatus] = useState(initialLightStatus);
    

    const colors = ['ready', 'stop', 'ready', 'go'];
    const listOfLights = ['red', 'yellow', 'green'];
    const TRAFFIC_LIGHT_SWITCH_MAP = {
        'ready': 'yellow',
        'go': 'green',
        'stop': 'red',
    };
    console.log(TRAFFIC_LIGHT_SWITCH_MAP);
    console.log(signalIndex)
    console.log(lightStatus)
    // const resetAll = () => {
    //     setLight(null);
    // }n
    function loopSignal() {
        if (signalIndex === 4) {
            signalIndex = 0;
        }
        const switchName = colors[signalIndex];
        
        const switchLight = TRAFFIC_LIGHT_SWITCH_MAP[switchName];
        signalIndex = signalIndex + 1;
        console.log(signalIndex)
        const updateLightStatus = [...initialLightStatus];
        updateLightStatus[switchLight] = true;
        setLightStatus(updateLightStatus);
        setSignalIndex(signalIndex);
        setTimeout(()=>(loopSignal), 2000);
       

    }
    
    // useEffect(() => {
    //     loopSignal();
    // }, [])

    return (

        <div >
            {listOfLights.map((color) => {
                return (<Lights color={color} lightStatus={lightStatus[color]} />
                )
            }
            )}
        </div>
    )


}


// import React, { useState } from 'react';
// import './Lights.css';
// import Lights from './Lights';

// export default function Auto() {
//     const colors = ['red', 'yellow', 'green']
//     const [light, setLight] = useState(null)

//     const control = () => {

//         setLight('yellow');
//         setTimeout(() => { setLight('red') }, 2000);
//         setTimeout(() => { setLight('yellow') }, 4000);
//         setTimeout(() => { setLight('green') }, 6000);
//         setTimeout(control, 8000);
//     }
    // useEffect(()=>{
    //     debugger;
    //     control();
    // },[])





//     return (
//         <div>
//             <div >
//                 {colors.map((color) => {
//                     return (<Lights color={color} light={light} />
//                     )
//                 }
//                 )}
//             </div>
//             <button onClick={control}>Auto</button>

//         </div>
//     )
// }




