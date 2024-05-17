import React, { useState } from 'react';
import { ComponentStory, ComponentMeta, } from '@storybook/react';
import Expi from "../components/expi";

export default {
    title: 'Expi',
    component: Expi,
} as ComponentMeta;



const Template: ComponentStory<typeof Expi> = (args) => {

    const [inview, setinview] = useState(false);
    const [percentage, setpercentage] = useState(0)

    return (
        <>
            <button style={{ position: 'absolute', left: '0' }} onClick={() => (setinview(!inview))}>hello</button>

            <Expi style={{left: 400, top: 200}} {...args} {...{ inview, setinview, percentage, setpercentage }} />
        </>
    )
};
let explode = true;
let flipIcon = true
let transition = 1
let distributionQuadrants = [2, 3, 2, 3]
let bits = 10;
let widthCoverage = 0.9
let increment = 0.005
let heightCoverage = 0.8
let iconSize = 90
let maxexpansion = 1.4
let icons = [
    './icons/1.png',
    './icons/2.png',
    './icons/3.png',
    './icons/4.png',
    './icons/5.png'
]

export const Default = Template.bind({});
Default.args = {
    explode, flipIcon, transition, maxexpansion, distributionQuadrants, bits, widthCoverage, increment, heightCoverage, iconSize, icons
    // Add default props here if needed
};