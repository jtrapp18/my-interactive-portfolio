import React, { useContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { mobileTheme, windowTheme } from './MiscStyling';
import { useWindowWidth } from './context/WindowWidthProvider'

const Loading = styled.p`
  font-size: 75px;
  font-weight: bold;
`;

function App() {
  const isMobile = useWindowWidth();

  console.log('NODE_ENV in config:', process.env.NODE_ENV);

  return (
    <ThemeProvider theme={isMobile ? mobileTheme : windowTheme}>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App;