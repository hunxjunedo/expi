
import React, { useState } from 'react';
import './App.css';

function App() {
  //THE STATES
  const [percentage, setpercentage] = useState(0)
  const [iconsRendered, seticonsrendered] = useState([])
  const [inview, setinview] = useState(false);

  //THE CONFIGS
  let explode = true;
  let flipIcon = true
  let transition = 1
  let distributionQuadrants = [2, 3, 2, 3]
  let bits = 10;
  let widthCoverage = 0.9
  let increment = 0.005
  let heightCoverage = 0.8
  let iconSize = 90
  let icons = [
    './icons/1.png',
    './icons/2.png',
    './icons/3.png',
    './icons/4.png',
    './icons/5.png'
  ]

  //THE STYLINGS
  let styles = {
    mainContainer: {
      width: '10vw',
      height: '10vw',
      border: '1px solid red',
      position: 'absolute',
      display: 'grid',
      justifyItems: 'center',
      alignItems: 'center'
    },

    icon: {
      position: 'absolute',
      transition: explode ? transition+'s' : '0.2s',
      width: iconSize, height: iconSize,
      userSelect: 'none'


    }
  }


  //RENDERING X TIMES

  React.useEffect(() => {
    if (percentage >= 1 && percentage <= 2 ) {
      setTimeout(() => {
        setpercentage(prevPercentage => prevPercentage + increment);
      }, percentage >= 1.1 ? 200 : (transition)*1000);
    }
  }, [percentage]);

  React.useEffect(()=>{
if(inview){
  setpercentage(1)
}else{
  setpercentage(0)
}
  }, [inview])




  React.useEffect(() => {
    let tempicons = []
    let currentQuad = 1;
    let currentQuadLeft = distributionQuadrants[0]
    for (let a = 0; a < bits; a++) {
      //get a random icon
      let randomIndex = Math.floor(Math.random() * (icons.length - 0)) + 0;


      //now randomly decide if have to flip the image
      let flip = (Math.random()) > 0.5 && flipIcon;
      let othertransformations = ''
      othertransformations += flip ? ' scaleX(-1) ' : ''


      //now lets randomly decide the rotation
      let rotate = (Math.asin(Math.random())) * 180 / Math.PI;
      rotate = Math.floor(rotate)

      //get desitny x and y  
      let randomBetween2and10 = Math.floor(Math.random() * (10 - 2)) + 2
      let windowWidth = window.innerWidth/2
      let windowHeight = window.innerHeight/2

      //now divide the both dimensions by 2 and get an avg.
      let destinyX = Math.floor(Math.random() * (windowWidth * widthCoverage) - 100) + 100
      let destinyY = Math.floor(Math.random() * (windowHeight * heightCoverage) - 100) + 100

      //QUADRANT DISTRIBUTION MATHS
      
      //change quad
      if (currentQuadLeft <= 0) {
        currentQuad += 1
        currentQuadLeft = distributionQuadrants[currentQuad - 1]
      }

      //change according to quad
      if (currentQuad === 1) {

      //X positve and Y negative
        destinyX *= flip ? -1 : 1
        destinyY *= -1

      } else if (currentQuad === 2) {
      //X negative and Y negative  
        destinyY *= -1
        destinyX *= flip ? 1 : -1

      } else if (currentQuad === 3) {
      //X negative Y positive
        destinyX *= flip ? 1 : -1

      } else if (currentQuad === 4) {
      //X positive Y positive
        destinyX *= flip ? -1 : 1

      }

      //subtarct points left
      currentQuadLeft -= 1

      //if too tilted, starighten, otherwise tilten
      let destinyTheta = rotate > 40 ? randomBetween2and10 : -randomBetween2and10

      //icon source
      let randssrc = icons[randomIndex];

      //all ready to push
      tempicons.push({
        Func: ({ style }) => { return (<img draggable='false' className='icon' style={{ ...styles.icon, ...style, ...{animation: `${flip ? 'torto' : 'torto2'} 20s linear infinite`} }} src={randssrc} />) },
        intiailRotate: rotate,
        othertransformations,
        destinyX,
        destinyY,
        destinyTheta

      })
    }
    seticonsrendered(tempicons)

  }, [])
  return (
    <>
      {/* <input max={1} step={0.1} style={{ position: 'absolute', left: '0' }} type='range' value={percentage} onChange={(e) => { setpercentage(e.target.value) }} /> */}
      <button style={{ position: 'absolute', left: '0' }} onClick={() => (setinview(!inview))}>hello</button>
      <div style={styles.mainContainer}>
        {iconsRendered.map(({ Func, destinyTheta, destinyX, destinyY, intiailRotate, othertransformations }) => {

          return (
            <Func style={{ opacity: percentage == 0 ? '0' : '100%' ,transform: `${othertransformations} translate(${destinyX * percentage}px, ${destinyY * percentage}px) rotate(${(destinyTheta - intiailRotate) * percentage}deg) ` }} />
          )

        }

        )}
      </div>
    </>
  );
}

export default App;
