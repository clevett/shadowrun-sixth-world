import { EuiFormRow, EuiSelect } from '@elastic/eui'
import { useRecoilState } from 'recoil'

import { ATOM } from '../../../../../../recoil'
import { buildOption } from '../../../../../../utilities/euiHelpers'

const AttributeSelect = ({
  attribute,
}: AttributeSelectProps) => {
  const [score, setScore] = useRecoilState<number>(ATOM.characterAttribute(`${attribute.toUpperCase()}`))
  
  let options = []
  do {
    options.push( buildOption(options.length + 1) )
  }
  while (options.length < 6);

  return(
    <EuiFormRow
      className="text-transform-capitalize"
      key={`priority-attribute-${attribute}`} 
      label={attribute}
    >
      <EuiSelect
        className="text-transform-capitalize"
        onChange={(event) => setScore( parseInt(event.target.value) )}
        options={options}
        value={score}
      />
    </EuiFormRow>
  )
}

type AttributeSelectProps = {
  attribute: AttributeNames
}

export default AttributeSelect