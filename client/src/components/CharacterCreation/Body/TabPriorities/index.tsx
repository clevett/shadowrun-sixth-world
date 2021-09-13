import { useRecoilState } from 'recoil'
import { EuiForm, EuiFormRow, EuiSelect } from '@elastic/eui'

import { buildOption } from "../../../../utilities/euiHelpers"

import { 
  CHARACTER_CREATION_PRIORITIES_METATYPE,
  CHARACTER_CREATION_PRIORITIES_SPECIAL
} from "../../../../recoil"

import { METATYPES, SPECIAL_PRIORITIES } from '../../../../data'

import "./styles.sass"

const TabPriorities = () => {
  const metatypeOptions = METATYPES.map(meta => buildOption(meta.name ))
  const [metatype, setMetatype] = useRecoilState(CHARACTER_CREATION_PRIORITIES_METATYPE)

  const getSpecialOptions = SPECIAL_PRIORITIES.map(special => ( buildOption(special.name) ))
  const specialOptions = [ ...getSpecialOptions, buildOption("mundane") ]
  const [special, setSpecial] = useRecoilState(CHARACTER_CREATION_PRIORITIES_SPECIAL)

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
            onChange={( { target } ) => setSpecial(target.value)}
            options={specialOptions}
            value={special}
          />
        </EuiFormRow>
      </EuiForm>
    </>
  )
}

export default TabPriorities