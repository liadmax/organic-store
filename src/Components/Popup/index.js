import React from 'react';
import Popup from 'reactjs-popup';
import { HeroBtn } from '../Hero/HeroElements';
import {Content} from './PopupElements'



//eslint-disable-next-line 
export default () => (
  <Popup trigger={<HeroBtn>click here</HeroBtn>} position="right center">
    <Content> api recommendation </Content>
  </Popup>
);


