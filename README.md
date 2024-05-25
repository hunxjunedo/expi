
# Expli

cool and highly customization explosive icons animation. Use it in portfolios, product pages, landing pages, and possibly everything you can imagine!




## Screenshots

![App Screenshot](https://raw.githubusercontent.com/hunxjunedo/expli/main/screenshots/1.png)

![App Screenshot](https://raw.githubusercontent.com/hunxjunedo/expli/main/screenshots/2.png)

## Demo
https://expli.vercel.app
## Installation

Install Expli with npm

```bash
  npm i expli
```
    
    
## Usage/Examples

```javascript
import { Expli } from 'expli';

function App() {

  const [percentage, setpercentage] = useState(0)
  const [inview, setinview] = useState(false)

  return (
      <Expli
        icons={['./1.png', './2.png']}
        transition={0.2}
        distributionQuadrants={[4, 3, 4, 4]}
        bits={15}
        widthCoverage={0.9}
        heightCoverage={0.9}
        increment={0.001}
        inview={inview}
        percentage={percentage}
        setpercentage={setpercentage}
        maxexpansion={2}
      />
  )
}
```


## API Reference



| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `explode`      | `boolean` | show the explode effect or not, if set  to false, the `transition` parameter doesn't make any difference |
| `transition`      | `number` | **Required:** the time it takes for all icons to complete the explosion in *seconds*|
| `distributionQuadrants`      | `Array: [p, q, r ,s]` | **Required:** number of icons in each quadrant around the container's center. Must sum to `bits`|
| `bits`      | `number` | **Required:** number of icons to render overall|
| `widthCoverage`      | `number` | **Required:** the percentage of x-axis covered by the icons once exploded,  between 0 and 1 inclusive, 1 means the icons may reach both the left and right edges of the viewport|
| `heightCoverage`      | `number` | **Required:** same as `widthCoverage` but for the y-axis|
| `increment`      | `number` | **Required:** percentage increase in the explosion during lazy movement, per unit time.|
| `iconSize`      | `string` | **Required:** size of the icons in CSS format. i.e `'24px'`
| `icons`      | `Array: [src1, src2...]` | **Required:** the array containing image source of each icon.
| `percentage`      | `number` |**Required:** the percentage of the explosion completed, a value between 1 and 0 inclusive, useful when using with page scrolls. |
| `maxexpansion`      | `number` | **Required:** the percentage of the lazy movement once completely exploded, example: 1.5 means it will move unitl it completes 150% of the explosion|
| `setpercentage`      | `function` | the function, i.e useState changer to change the `percentage`, required for lazy movement|
| `flipIcon`      | `boolean` | flip icons to add make the explosion more random|
| `style`      | `Object` |custom styles for the main container holding icons.|
| `inview`      | `boolean` |should the icons be visible|



