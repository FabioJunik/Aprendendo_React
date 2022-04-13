import React, { useEffect, useRef, useState } from 'react';
import styles from './Slide.module.css';
import rigthArrow from './images/rigth-arrow.png';
import leftArrow from './images/left-arrow.png';

const Slide = ({slides}) => {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const contentRef = useRef();
 
  useEffect(()=>{
    const {width} = contentRef.current.getBoundingClientRect();
      setPosition(-(active * width));  
  },[active])
 
  function slidePrev(){
    active > 0 && setActive(active - 1);
  }

  function slideNext(){
    active < slides.length - 1 && setActive(active + 1);
  }
  return (
    <section className={styles.container}>
        <div className={styles.content} style={{transform:`translateX(${position}px)`}}
        ref={contentRef}>
          {slides.map(({id,url})=>(
              <div key={id} className={styles.item} style={{backgroundImage:`url(${url})`}}></div>
          ))}
        </div>
        <nav className={styles.nav} >
            <img src={leftArrow} width='50px' onClick={slidePrev}/>
            <img src={rigthArrow} width='50px' onClick={slideNext}/>
        </nav>
    </section>
  )
}

export default Slide