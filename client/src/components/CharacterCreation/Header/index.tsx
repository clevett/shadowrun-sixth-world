import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
} from '@elastic/eui';

import HeaderAppMenu from "./HeaderAppMenu"
import HeaderLogo from "./HeaderLogo"
import HeaderUserMenu from "./HeaderUserMenu"

import SR6Logo from "./SR6Logo.png"

const Header = () => {
  return (
    <EuiHeader>
      <EuiHeaderSection grow={false}>
        <EuiHeaderSectionItem border="right">
          <HeaderLogo />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>

      <EuiHeaderSection side="right">
        <img src={SR6Logo} alt="Shadowrun 6th Edition logo" />
      </EuiHeaderSection>

      <EuiHeaderSection side="right">
        <EuiHeaderSectionItem>
          <HeaderUserMenu />
        </EuiHeaderSectionItem>

        <EuiHeaderSectionItem>
          <HeaderAppMenu />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  );
};

export default Header
