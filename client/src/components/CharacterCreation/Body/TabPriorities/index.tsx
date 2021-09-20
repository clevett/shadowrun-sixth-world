import { EuiForm, EuiSpacer } from '@elastic/eui'

import AdjustmentPointsBuy from "./AdjustmentPointsBuy"
import AttributeBuy from './AttributeBuy'
import MetatypeQualities from "./MetatypeQualities"
import PriorityTable from './PriorityTable'
import SelectMetatype from "./SelectMetatype"
import SelectSpecial from './SelectSpecial/SelectSpecial'
import SkillBuy from './SkillBuy'


import "./styles.sass"

const TabPriorities = () => {
  const getContent = () => {
    return (
      <>
        <PriorityTable />
  
        <EuiSpacer />

        <AttributeBuy />

        <EuiSpacer />

        <AdjustmentPointsBuy />

        <EuiSpacer />

        <MetatypeQualities />
      </>
    )
  }

  return (
    <>
      <EuiForm className={"priority-table-data-grid"} component="form">
        <SelectMetatype />
        <SelectSpecial />
      </EuiForm>

      <EuiSpacer />

      {getContent()}

      <EuiSpacer />
    
      <SkillBuy />
    </>
  )
}

export default TabPriorities