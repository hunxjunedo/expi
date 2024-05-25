import './App.css';
import { Expli } from 'expli';
import { useEffect, useState } from 'react';
import {Github, Package} from 'lucide-react'

function App() {
  //should have used tailwind :(
  const [percentage, setpercentage] = useState(0)
  const [inview, setinview] = useState(false)
  const ismobile = window.innerWidth <= 500
  const background = 'linear-gradient(294deg, rgb(128, 157, 255) 0%, rgb(151, 160, 252) 15%, rgb(165, 155, 248) 22%, rgb(180, 155, 243) 28%, rgb(194, 155, 238) 33%, rgb(206, 155, 233) 37%, rgb(216, 156, 227) 42%, rgb(225, 157, 222) 46%, rgb(232, 156, 215) 50%, rgb(238, 160, 211) 54%, rgb(243, 160, 204) 58%, rgb(247, 161, 198) 63%, rgb(250, 168, 197) 67%, rgb(253, 170, 192) 72%, rgb(254, 174, 189) 78%, rgb(255, 179, 186) 85%, rgb(255, 179, 181) 100%)'
  const themeclr = 'rgb(225, 157, 222)'
  const innerDIm = ismobile ? 80 : 50
  const redirectHandle = (type) => {
    window.location.href = type === 'gh' ? 'https://www.github.com/hunxjunedo/expli' : 'https://www.npmjs.com/package/expli'
  }
  const styles = {
   dock: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    borderRadius: 20,
    background: 'rgb(10, 10, 10, 0.6)',
    width: ismobile ? '30vw' : '10vw',
    alignItems: 'center',
    justifyItems: 'center',
    padding: 10,
   },

    main: { width: '100vw', height: '100vh', overflow: 'clip', backgroundImage: background },
    inner: { width: `${innerDIm}vw`, left: `calc(50% - ${innerDIm / 2}vw)`, height: `${innerDIm}vw`, top: `calc(50% - ${innerDIm / 2}vw)`, position: 'absolute' }
  }


  return (
    <div style={styles.main}>
      <div style={styles.dock}>
        <button style={{...styles.controls, gridColumn: '1/-1'}} onClick={() => (setinview(!inview))}>
          click me!
        </button>
        <input style={{...styles.controls, width: '100%', gridRow: '2/3', gridColumn: '1/-1'}} type='range' step={1} min={0} max={100} value={percentage * 100} onChange={(e) => (setpercentage(e.target.value / 100))} />
      <Github style={{gridRow: '3/4', gridColumn: '1/2' , cursor: 'pointer'}} color={themeclr} onClick={()=>(redirectHandle('gh'))} />
      <Package style={{gridRow: '3/4', gridColumn: '2/3' , cursor: 'pointer'}} color={themeclr} onClick={()=>(redirectHandle('npm'))} />
      </div>
      <div style={styles.inner}>

        <Expli
          style={{ left: `${innerDIm / 2}vw`, top: `${innerDIm / 2}vw` }}
          icons={['./1.png', './2.png', './4.png', './5.png', './instagram.png']}
          transition={0.2}
          distributionQuadrants={[4, 3, 4, 4]}
          bits={15}
          widthCoverage={0.9}
          heightCoverage={0.9}
          increment={0.001}
          iconSize={ismobile ? 60 : 100}
          inview={inview}
          percentage={percentage}
          setpercentage={setpercentage}
          maxexpansion={2}
          explode={true}

        />
        <img onLoad={() => (setinview(true))} src={'./avatar.webp'} style={{ width: `${innerDIm}vw`, zIndex: 10, position: 'absolute' }} />

      </div>




    </div>
  );
}

export default App;
