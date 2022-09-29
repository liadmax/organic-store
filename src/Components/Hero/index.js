import React, { useState } from 'react';
import Navbar from '../Navbar';
import Popup from '../Popup';

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP
  
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
     
      <HeroContent>
        <HeroItems>
          <HeroH1>ORCANICA</HeroH1>
          <HeroP>your one stop shop for everting organic and healthy!</HeroP>
         <Popup />
         
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;