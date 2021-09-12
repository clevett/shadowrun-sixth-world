import { useRecoilState } from 'recoil';

import { EuiFormRow, EuiSelect } from '@elastic/eui'

import { CHARACTER_CREATION_ROLE } from "../../../../../recoil"
import { CHARACTER_ROLES } from "../../../helpers"

const ChooseRole = () => {
  const options = CHARACTER_ROLES.map(role => ( {  text: role, value: role,} ))
  const [ role, setRole ] = useRecoilState(CHARACTER_CREATION_ROLE)

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
