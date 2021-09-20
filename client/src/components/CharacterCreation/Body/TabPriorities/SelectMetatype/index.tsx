import { EuiFormRow, EuiSelect } from '@elastic/eui'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'

import { METATYPE } from '../../../../../data'
import { CHARACTER_PRIORITIES } from '../../../../../recoil'
import { buildOption } from '../../../../../utilities/euiHelpers'
import getMetatypeData from '../helpers/getMetatypeData'

const SelectMetatype = () => {
  const [ metatypeName, setMetatypeName ] = useState( METATYPE.METATYPES.human )
  const setMetatype = useSetRecoilState(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_METATYPE)
  const metatypeOptions = Object.values(METATYPE.METATYPES).map(meta => buildOption(meta ))

  useEffect(() => {
    const metatypeData = getMetatypeData(metatypeName)
    
    if(metatypeData) {
      setMetatype(metatypeData)
    }
  }, [ metatypeName, setMetatype ])

  return (
    <EuiFormRow label="Choose a metatype">
      <EuiSelect
        className="text-transform-capitalize"
        onChange={( { target } ) => setMetatypeName(target.value)}
        options={metatypeOptions}
        value={metatypeName}
      />
    </EuiFormRow>
  )
}

export default SelectMetatype
