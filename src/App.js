import React from 'react';
import { 
  Box
 } from '@chakra-ui/react'

import { Header } from './Header';
import { Intro } from './Intro';
import {Features} from './Features';
import {Slider} from './Slider';
import { Prefooter } from './Prefooter';
import {Footer} from './Footer';
import { Modal } from './Modal';

const sections = [{
  href: 'pricing',
  name: 'Pricing'
},
{
  href: 'product',
  name: 'Product'
},
{
  href: 'about',
  name: 'About Us'
},
{
  href: 'careers',
  name: 'Careers'
},
{
  href: 'community',
  name: 'Community'
}]

function App() {
  const initialState = window.innerWidth < 768 ? false : true;
  const [showMenu, setShowMenu] = React.useState(initialState);
  const [hideBgFeatureTitle, setHideBgFeatureTitle] = React.useState(!initialState);
  const [showDots, setShowDots] = React.useState(!initialState);
  const [mobile, setMobile] = React.useState(!initialState);
  const [openModal, setOpenModal] = React.useState(false);

  const toggleModal = () =>{
    setOpenModal(!openModal)
}

  React.useEffect(() => {
      function handleResize() {
      if (window.innerWidth < 768) {
          setShowMenu(false);
          setHideBgFeatureTitle(true)
          setShowDots(true);
          setMobile(true)
      } else {
          setShowMenu(true);
          setHideBgFeatureTitle(false)
          setShowDots(false)
          setMobile(false)
      }
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box overflowX='hidden'>
      <Box 
        bgSize= 'cover'
        bgPosition= 'center'
        bgRepeat= 'no-repeat'
        minHeight= '100vh'
        overflowX= 'hidden'
        position= 'relative'
        zIndex= '100'
        >
        {(openModal && mobile) && <Modal sections={sections} toggleModal={toggleModal} setOpenModal={setOpenModal}/>}
        <Header showMenu={showMenu} setShowMenu={setShowMenu} openModal={openModal} sections={sections} toggleModal={toggleModal} ></Header>
        <Intro/>
        <Features hideBgFeatureTitle={hideBgFeatureTitle}></Features>
        <Slider showDots={showDots}></Slider>
        <Prefooter/>
        <Footer mobile={mobile}/>
      </Box>
    </Box>

  );
}

export default App;
