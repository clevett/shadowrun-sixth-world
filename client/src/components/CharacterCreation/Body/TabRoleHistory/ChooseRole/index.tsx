import { useRecoilState } from 'recoil';
import { EuiFormRow, EuiSelect } from '@elastic/eui'

import { buildOption } from "../../../../../utilities/euiHelpers"

import { CHARACTER_HISTORY } from "../../../../../recoil"
import { CHARACTER_ROLES } from "../../../../../data/"

const ChooseRole = () => {
  const options = CHARACTER_ROLES.map(role => buildOption(role))
  const [ role, setRole ] = useRecoilState(CHARACTER_HISTORY.CHARACTER_CREATION_ROLE)

  return(
    <EuiFormRow label="Choose a role">
      <EuiSelect
        onChange={( { target } ) => setRole(target.value)}
        options={options}
        value={role}
      />
    </EuiFormRow>
  )
}

export default ChooseRole 
