import React, { useContext } from 'react';
import Headroom from 'react-headroom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Loading = styled.p`
  font-size: 75px;
  font-weight: bold;
`;

function App() {

  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;