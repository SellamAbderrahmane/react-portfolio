import { AnimatePresence } from 'framer-motion';
import * as React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AboutMe from './src/pages/AboutMe';
import Contact from './src/pages/Contact';
import Experience from './src/pages/Experience';
import Home from './src/pages/Home';
import Portfolio from './src/pages/Portfolio';
import PortfolioProvider from './src/portfolio.context';

import { Layout } from './src/ui';

export default function App() {
  const location = useLocation();

  return (
    <PortfolioProvider>
      <AnimatePresence exitBeforeEnter>
        {/* <Layout>
          <AboutMe />
          <Contact />
          <Experience />
          <Portfolio />
        </Layout> */}
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<AboutMe />} />
            <Route path="contact" element={<Contact />} />
            <Route path="experience" element={<Experience />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </PortfolioProvider>
  );
}
