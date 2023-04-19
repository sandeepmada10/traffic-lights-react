import React from 'react';
import LightsDisplay from './traffic-lights/LightsDisplay';
import Auto from './traffic-lights/auto';


function App() {
 
  return (
    <>
   <LightsDisplay />
   <Auto />
   <button  className='manual'>Manual</button>
   </>
  );
}

export default App;
