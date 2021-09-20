import { useRecoilValue } from 'recoil'
import { EuiForm, EuiSpacer } from '@elastic/eui'

import AdjustmentPointsBuy from "./AdjustmentPointsBuy"
import AttributeBuy from './AttributeBuy'
import MetatypeQualities from "./MetatypeQualities"
import PriorityTable from './PriorityTable'
import SelectMetatype from "./SelectMetatype"
import SelectSpecial from './SelectSpecial/SelectSpecial'
import SkillBuy from './SkillBuy'

import { CHARACTER_PRIORITIES } from "../../../../recoil"

import "./styles.sass"

const TabPriorities = () => {
  const metatype = useRecoilValue(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_METATYPE)

  const getContent = () => {
    return (
      <>
        <PriorityTable metatype={metatype} />
  
        <EuiSpacer />

        <AttributeBuy />

        <EuiSpacer />

        <AdjustmentPointsBuy />

        <EuiSpacer />

        <MetatypeQualities metatype={metatype} />
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