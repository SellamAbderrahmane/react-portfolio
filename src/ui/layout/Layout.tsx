import * as React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Animator, Social } from '../components';

import './layout.css';
import Header from './Header';
import Sidebar from './Sidebar';

export function Layout() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <Animator className="content container">
        <Outlet />
      </Animator>
      {/* <Social /> */}
    </div>
  );
}

export default Layout;
