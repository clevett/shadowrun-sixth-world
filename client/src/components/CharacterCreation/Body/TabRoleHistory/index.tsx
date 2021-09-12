import { SetStateAction, useState } from "react"
import { EuiForm, EuiFormRow, EuiFieldText, EuiSelect, EuiText, EuiTextArea } from '@elastic/eui'

import { useRecoilState } from 'recoil';
import { characterRole } from "../../state"

import { CHARACTER_ROLES } from "../../helpers"


const TabRoleHistory = () => {
  const options = CHARACTER_ROLES.map(role => ( {  text: role, value: role,} ))

  const [ role, setRole ] = useRecoilState(characterRole)
  const [ birthPlace, setBirthPlace ] = useState("")
  const [ raised, setRaised ] = useState("")
  const [ trained, setTrained ] = useState("")

  const roleOnChange = ( { target }: Event ) => setRole(target.value)
  const birthPlaceChange = ( { target }: Event ) => setBirthPlace(target.value)
  const raisedChange = ( { target }: Event ) => setRaised(target.value)
  const trainedChange = ( { target }: Event ) => setTrained(target.value)

  return(
    <EuiForm component="form">

      <EuiFormRow label="Choose a role">
        <EuiSelect
          options={options}
          value={role}
          onChange={roleOnChange}
        />
      </EuiFormRow>

      <EuiFormRow label="Where was your character born?">
        <EuiTextArea
          title="Where was your character born?"
          value={birthPlace}
          onChange={birthPlaceChange}
        />
      </EuiFormRow>

      <EuiFormRow label="Where was your character raised?">
        <EuiTextArea
          title="Where was your character raised?"
          value={raised}
          onChange={raisedChange}
        />
      </EuiFormRow>

      <EuiFormRow label="Where was your character trained?">
        <EuiTextArea
          title="Where was your character trained?"
          value={trained}
          onChange={trainedChange}
        />
      </EuiFormRow>


    </EuiForm>
  )
}

type Event = { target: { value: SetStateAction<string> } }

export default TabRoleHistory