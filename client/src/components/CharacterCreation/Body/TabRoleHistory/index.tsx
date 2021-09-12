import { SetStateAction, useEffect, useState } from "react"
import { useRecoilState } from 'recoil';
import { EuiAccordion, EuiForm, EuiFormRow, EuiSpacer, EuiTextArea } from '@elastic/eui'

import ChooseRole from "./ChooseRole"
import { CHARACTER_CREATION_HISTORY } from '../../state';
import { CHARACTER_HISTORY_QUESTIONS } from '../../helpers';

const TabRoleHistory = () => {

  const [ history, setHistory ] = useRecoilState(CHARACTER_CREATION_HISTORY)

  const [ birth, setBirth ] = useState("")
  const [ raised, setRaised ] = useState("")
  const [ trained, setTrained ] = useState("")
  const [ now, setNow ] = useState("")
  const [ aspect, setAspect ] = useState("")

  return(
    <EuiForm component="form">
      <ChooseRole />

      <EuiSpacer />

      <EuiAccordion id="accordion1" buttonContent={CHARACTER_HISTORY_QUESTIONS.born}>
        <EuiTextArea
          fullWidth
          onChange={( { target }: Event ) => setBirth(target.value)}
          value={birth}
        />
      </EuiAccordion>

      <EuiAccordion id="accordion1" buttonContent={CHARACTER_HISTORY_QUESTIONS.raised}>
        <EuiTextArea
          fullWidth
          onChange={( { target }: Event ) => setRaised(target.value)}
          value={raised}
        />
      </EuiAccordion>

      <EuiAccordion id="accordion1" buttonContent={CHARACTER_HISTORY_QUESTIONS.trained}>
        <EuiTextArea
          fullWidth
          onChange={( { target }: Event ) => setTrained(target.value)}
          value={trained}
        />
      </EuiAccordion>

      <EuiAccordion id="accordion1" buttonContent={CHARACTER_HISTORY_QUESTIONS.now}>
        <EuiTextArea
          fullWidth
          onChange={( { target }: Event ) => setNow(target.value)}
          value={now}
        />
      </EuiAccordion>

      <EuiAccordion id="accordion1" buttonContent={CHARACTER_HISTORY_QUESTIONS.aspect}>
        <EuiTextArea
          fullWidth
          onChange={( { target }: Event ) => setAspect(target.value)}
          value={aspect}
        />
      </EuiAccordion>

    </EuiForm>
  )
}

type Event = { target: { value: SetStateAction<string> } }

export default TabRoleHistory