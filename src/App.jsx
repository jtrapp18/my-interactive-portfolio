import React, { useContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Loading = styled.p`
  font-size: 75px;
  font-weight: bold;
`;

function App() {

  console.log('NODE_ENV in config:', process.env.NODE_ENV);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;