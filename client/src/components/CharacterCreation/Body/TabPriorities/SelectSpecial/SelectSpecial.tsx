import { EuiFormRow, EuiSelect } from '@elastic/eui'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { SPECIAL } from '../../../../../data'

import { CHARACTER_PRIORITIES } from '../../../../../recoil'
import { buildOption } from '../../../../../utilities/euiHelpers'
import findSpecialData from "../helpers/findSpecialData"

const SelectSpecial = () => {
  const setSpecial = useSetRecoilState(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_SPECIAL)
  const [ specialName, setSpecialName ] = useState(SPECIAL.TYPES.mundane)

  const getSpecialOptions = SPECIAL.ATTRIBUTES.map(special => ( buildOption(special.name) ))
  const specialOptions = [ ...getSpecialOptions, buildOption("mundane") ]

  useEffect(() => {
    const specialData = findSpecialData(specialName) as Special

    if(specialData) {
      //@ts-expect-error type needs work
      setSpecial( specialData )
    }
  }, [ specialName, setSpecial ])

  return(
    <EuiFormRow label="Select magic or resonance">
      <EuiSelect
        className="text-transform-capitalize"
        onChange={( { target } ) => setSpecialName(target.value)}
        options={specialOptions}
        value={specialName}
      />
    </EuiFormRow>
  )
}

export default SelectSpecial