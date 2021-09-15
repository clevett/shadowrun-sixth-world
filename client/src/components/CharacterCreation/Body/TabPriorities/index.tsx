import { useEffect } from "react"
import { useRecoilState, useRecoilValue } from 'recoil'
import { EuiForm, EuiFormRow, EuiSelect, EuiSpacer } from '@elastic/eui'

import PriorityTable from './PriorityTable'
import { buildOption } from "../../../../utilities/euiHelpers"

import { 
  CHARACTER_CREATION_PRIORITIES_METATYPE,
  CHARACTER_CREATION_PRIORITIES_SPECIAL,
} from "../../../../recoil"

import { METATYPE, PRIORITIES } from '../../../../data/'

import "./styles.sass"

const TabPriorities = () => {
  const metatypeOptions = Object.values(METATYPE.METATYPES).map(meta => buildOption(meta ))
  const [metatype, setMetatype] = useRecoilState(CHARACTER_CREATION_PRIORITIES_METATYPE)

  const getSpecialOptions = PRIORITIES.SPECIAL.map(special => ( buildOption(special.name) ))
  const specialOptions = [ ...getSpecialOptions, buildOption("mundane") ]
  const [special, setSpecial] = useRecoilState<SpecialTypes>(CHARACTER_CREATION_PRIORITIES_SPECIAL)

  return (
    <>
      <EuiForm component="form">
        <EuiFormRow label="Choose a metatype">
          <EuiSelect
            className="TabPriorities-select"
            onChange={( { target } ) => setMetatype(target.value)}
            options={metatypeOptions}
            value={metatype}
          />
        </EuiFormRow>

        <EuiFormRow label="Select magic or resonance">
          <EuiSelect
            className="TabPriorities-select"
            //@ts-expect-error string does not match SpecialTypes
            onChange={( { target } ) => setSpecial(target.value)}
            options={specialOptions}
            value={special}
          />
        </EuiFormRow>
      </EuiForm>

      <EuiSpacer />

      <PriorityTable />    
    </>
  )
}

export default TabPriorities