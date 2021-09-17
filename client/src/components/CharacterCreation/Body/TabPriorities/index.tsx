import { useRecoilState } from 'recoil'
import { EuiForm, EuiFormRow, EuiSelect, EuiSpacer } from '@elastic/eui'

import AdjustmentPointsBuy from "./AdjustmentPointsBuy"
import AttributeBuy from './AttributeBuy'
import MetatypeQualities from "./MetatypeQualities"
import PriorityTable from './PriorityTable'
import SkillBuy from './SkillBuy'
import { buildOption } from "../../../../utilities/euiHelpers"
import { getMetatypeData } from "./helpers"

import { CHARACTER_PRIORITIES } from "../../../../recoil"
import { METATYPE, PRIORITIES } from '../../../../data/'

import "./styles.sass"

const TabPriorities = () => {
  const metatypeOptions = Object.values(METATYPE.METATYPES).map(meta => buildOption(meta ))
  const [metatype, setMetatype] = useRecoilState(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_METATYPE)

  const getSpecialOptions = PRIORITIES.SPECIAL.map(special => ( buildOption(special.name) ))
  const specialOptions = [ ...getSpecialOptions, buildOption("mundane") ]
  const [special, setSpecial] = useRecoilState<string>(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_SPECIAL)

  const metatypeData = getMetatypeData(metatype)

  return (
    <>
      <EuiForm className={"priority-table-data-grid"} component="form">
        <EuiFormRow label="Choose a metatype">
          <EuiSelect
            className="text-transform-capitalize"
            onChange={( { target } ) => setMetatype(target.value)}
            options={metatypeOptions}
            value={metatype}
          />
        </EuiFormRow>

        <EuiFormRow label="Select magic or resonance">
          <EuiSelect
            className="text-transform-capitalize"
            onChange={( { target } ) => setSpecial(target.value)}
            options={specialOptions}
            value={special}
          />
        </EuiFormRow>
      </EuiForm>

      <EuiSpacer />

      <PriorityTable />

      <EuiSpacer />

      <AttributeBuy />

      <EuiSpacer />

      <AdjustmentPointsBuy metatypeData={metatypeData} />

      <EuiSpacer />

      <MetatypeQualities metatypeData={metatypeData} />

      <EuiSpacer />
    
      <SkillBuy />
    </>
  )
}

export default TabPriorities