import * as React from 'react';
import { Link } from 'react-router-dom';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Header() {
  return (
    <header className="header container">
      <Link className="logo" to="/">
        <img src="https://raw.githubusercontent.com/SellamAbderrahmane/portfolio/main/public/images/logo/plogo.png?token=GHSAT0AAAAAABXYSZUFM35YALFFEWEX74YMYX6FLEA" />
      </Link>
      <nav>
        <ul className="h-list">
          <li>
            <a
              href="https://www.linkedin.com/in/abderrahmane-sellam-a5a78a194/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGift} /> Linkdin
            </a>
          </li>
          <li>
            <a href="https://github.com/SellamAbderrahmane" target="_blank">
              <FontAwesomeIcon icon={faGift} /> Github
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
