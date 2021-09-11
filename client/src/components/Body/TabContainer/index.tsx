import TabRoleHistory from "../TabRoleHistory"
import TabHome from "../TabHome"
import { EuiButton } from '@elastic/eui'

import "./styles.sass"

export const tabList = ['Home', '1. Role & History', '2. Priorities', '3. Qualities', '4. Karma', '5. Gear', '6. Finish']

export const TabContainer = ( { selectedTabIndex, updateSelectedTab }: TabContainerProps ) => {
  const getTab = () => {
    switch( selectedTabIndex ) {
      case 0:
        return <TabHome />
      case 1:
        return <TabRoleHistory />
      default:
        return <div>Tab Not Yet Created</div>
    }
  }

  return (
    // <div className="TabContainer-grid">
    //   <section>
    //     <EuiButton
    //       className={"arrowLeft"}
    //       color={"accent"}
    //       isDisabled={selectedTabIndex === 0}
    //       iconType={"arrowLeft"}
    //       onClick={() => updateSelectedTab( selectedTabIndex - 1 )}
    //     />
    //   </section>

      <section>{getTab()}</section>

      // <section>
      //   <EuiButton
      //      className={"arrowRight"}
      //     color={"accent"}
      //     isDisabled={selectedTabIndex === tabList.length - 1}
      //     iconType={"arrowRight"}
      //     onClick={() => updateSelectedTab( selectedTabIndex + 1 )}
      //   />
      // </section>
    //</div>
  )
}

export type TabContainerProps = {
  selectedTabIndex: number, 
  updateSelectedTab: ( arg: number ) => void,
}

export default TabContainer