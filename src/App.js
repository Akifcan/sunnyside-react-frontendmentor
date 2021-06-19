import React from 'react';
import './styles/App.css'

import AppMain from './components/AppMain';
import AppFooter from './components/AppFooter';
import Section1 from './components/sections/Section1';
import Gallery from './components/Gallery';

import { useSelector } from 'react-redux';
import { sectionList } from './features/sections/sectionSlice'

function App() {
  const data = useSelector(sectionList)
  return (
    <div>
      <AppMain />
      {data.map((item, index) => {
        return <Section1 key={index} index={index} section={item}></Section1>
      })}
      <Gallery />
      <AppFooter />
    </div >
  );
}

export default App;
