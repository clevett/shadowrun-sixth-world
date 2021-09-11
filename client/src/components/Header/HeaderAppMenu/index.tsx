import { useState } from 'react';

import { 
  EuiHeaderSectionItemButton, 
  EuiIcon, 
  EuiPopover, 
  EuiKeyPadMenu, 
  EuiKeyPadMenuItem, 
  htmlIdGenerator 
} from '@elastic/eui';

const HeaderAppMenu = () => {
  const idGenerator = htmlIdGenerator();
  const popoverId = idGenerator('popover');
  const keypadId = idGenerator('keypad');

  const [isOpen, setIsOpen] = useState(false);

  const onMenuButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const button = (
    <EuiHeaderSectionItemButton
      aria-controls={keypadId}
      aria-expanded={isOpen}
      aria-haspopup="true"
      aria-label="Apps menu"
      // aria-label="Apps menu with 1 new app"
      // // notification="1"
      onClick={onMenuButtonClick}
    >
      <EuiIcon type="apps" size="m" />
    </EuiHeaderSectionItemButton>
  );

  return (
    <EuiPopover
      id={popoverId}
      button={button}
      isOpen={isOpen}
      anchorPosition="downRight"
      closePopover={closeMenu}
    >
      <EuiKeyPadMenu id={keypadId} style={{ width: 288 }}>
        <EuiKeyPadMenuItem label="Dashboard">
          <EuiIcon type="dashboardApp" size="l" />
        </EuiKeyPadMenuItem>

        <EuiKeyPadMenuItem label="Dev Tools">
          <EuiIcon type="devToolsApp" size="l" />
        </EuiKeyPadMenuItem>
      </EuiKeyPadMenu>
    </EuiPopover>
  );
};

export default HeaderAppMenu
