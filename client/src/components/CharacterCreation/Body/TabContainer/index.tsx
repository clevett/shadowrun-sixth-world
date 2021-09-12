import { CHARACTER_CREATION_STEPS } from "../../helpers/"

import TabRoleHistory from "../TabRoleHistory"
import TabHome from "../TabHome"

import "./styles.sass"

export const tabList = ['Home', ...CHARACTER_CREATION_STEPS]

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