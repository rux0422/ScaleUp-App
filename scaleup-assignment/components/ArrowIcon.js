// components/ArrowIcon.js
// components/ArrowIcon.js
import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const ArrowIcon = () => (
  <Svg width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle cx={25} cy={25} r={25} fill="white" />
    <Path
      d="M21 17l8 8-8 8"
      stroke="#FFBB00"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowIcon;
