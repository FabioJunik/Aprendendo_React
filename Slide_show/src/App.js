import React, { } from 'react';
import Slide from './Slide';
import slide1 from './images/s1.jpg';
import slide2 from './images/s2.jpg';
import slide3 from './images/s3.jpg';
import slide4 from './images/s4.jpg';

const App = ()=>{
  const slides = [
    {
      id:'slide1',
      url: slide1
    },
    {
      id:'slide2',
      url: slide2
    },
    {
      id:'slide3',
      url: slide3
    },
    {
      id:'slide4',
      url: slide4
    }
  ]
  return (
    <div>
      <Slide slides={slides}/>
    </div>
  )
};

export default App;
