import { EuiPageTemplate } from '@elastic/eui';
import { useState } from 'react';

import SummarySidebar from "./SummarySidebar"
import TabContainer, { tabList } from "./TabContainer"

import border from "./borderRight.png"
import "./styles.sass"

const Body = () => {
  const [ selectedTab, setSelectedTab ] = useState(1)

  const updateSelectedTab = ( listIndex: number ) => { setSelectedTab( listIndex ) }
  const isSelected = ( index: number ) => index === selectedTab

  const buildTabList = () => {
    return tabList.map((listItem, index) => ({ 
      label: listItem, 
      isSelected: isSelected(index),
      onClick: () => updateSelectedTab(index),
    }))
  }

  return (
    <>
      <img src={border} style={{float: "right"}} alt="tribal dragon facing let" />
      <EuiPageTemplate
        className="Body"
        fullHeight={true}
        template="centeredBody"
        pageSideBar={SummarySidebar()}
        pageHeader={{
          tabs: buildTabList(),
        }}
      >
        <TabContainer 
          selectedTabIndex={selectedTab}
          updateSelectedTab={updateSelectedTab}
        />
      </EuiPageTemplate>
    </>
  )
}

export default Body