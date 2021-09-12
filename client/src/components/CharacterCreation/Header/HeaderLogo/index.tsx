import React from 'react';
import { EuiHeaderLogo } from '@elastic/eui';

import eLogo from './emerald_logo.png'

const HeaderLogo = () => (
  <EuiHeaderLogo
    iconType={eLogo}
    href="https://cassielevett.info"
    onClick={(e) => e.preventDefault()}
    aria-label="Go to home page"
  />
);

export default HeaderLogo