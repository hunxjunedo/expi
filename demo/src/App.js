import CircularSlider from '@fseehawer/react-circular-slider';
import './App.css';
import { Expli } from 'expli';
import { useEffect, useState } from 'react';
import gradient from '@privjs/gradients'
import Randomstring from 'randomstring';


function App() {
  const [percentage, setpercentage] = useState(0)
  const [inview, setinview] = useState(false)
  const ismobile = window.innerWidth <= 500
  const background = 'linear-gradient(294deg, rgb(128, 157, 255) 0%, rgb(151, 160, 252) 15%, rgb(165, 155, 248) 22%, rgb(180, 155, 243) 28%, rgb(194, 155, 238) 33%, rgb(206, 155, 233) 37%, rgb(216, 156, 227) 42%, rgb(225, 157, 222) 46%, rgb(232, 156, 215) 50%, rgb(238, 160, 211) 54%, rgb(243, 160, 204) 58%, rgb(247, 161, 198) 63%, rgb(250, 168, 197) 67%, rgb(253, 170, 192) 72%, rgb(254, 174, 189) 78%, rgb(255, 179, 186) 85%, rgb(255, 179, 181) 100%)'
useEffect(()=>{
setTimeout(() => {
  setinview(true)
}, 1000);

}, [])
const innerDIm = ismobile ? 80 : 50
  const styles = {
    controls: {

    },

    main: {width: '100vw',height: '100vh', overflow: 'clip', backgroundImage : background},
    inner: {width: `${innerDIm}vw`, left: `calc(50% - ${innerDIm/2}vw)`, height: `${innerDIm}vw`, top: `calc(50% - ${innerDIm/2}vw)`, position: 'absolute' }
  }


  return (
<div style={styles.main}>
<button style={styles.controls} onClick={()=>(setinview(!inview))}>
  click me!
</button>
<input style={styles.controls} type='range' step={0.01} min={0} max={1} value={percentage} onChange={(e)=>(setpercentage(e.target.value))} />
<div style={styles.inner}>

<Expli
style={{left:`${innerDIm/2}vw`, top: `${innerDIm/2}vw`}}
   icons={['./1.png', './2.png',  './4.png', './5.png']}
   transition={0.2}
   distributionQuadrants={[7, 8, 0, 0]}
   bits={15}
   widthCoverage={0.7}
   heightCoverage={0.7}
   increment={0.001}
   iconSize={ismobile ? 60 : 90}
   inview={inview}
   percentage={percentage}
   setpercentage={setpercentage}
   maxexpansion={2}
   explode={true}

   />
     <img src={'./avatar.webp'} style={{width: `${innerDIm}vw`, zIndex: 10, position: 'absolute'}}  />

</div>
   



</div>
  );
}

export default App;
