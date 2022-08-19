import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { faFaceAngry, faGift } from '@fortawesome/free-solid-svg-icons';

export function Social() {
  return (
    <ul className="social-list">
      <li>
        <a href="https://www.linkedin.com/in/abderrahmane-sellam-a5a78a194/">
          Linkdin
        </a>
        <FontAwesomeIcon icon={faGift} />
      </li>
      <li>
        <a href="https://github.com/SellamAbderrahmane">Github</a>
        {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
      </li>
    </ul>
  );
}

export default Social;
