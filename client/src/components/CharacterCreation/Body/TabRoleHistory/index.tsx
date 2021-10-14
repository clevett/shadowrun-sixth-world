import { useRecoilState } from 'recoil';
import { EuiAccordion, EuiForm, EuiSpacer, EuiTextArea } from '@elastic/eui'

import ChooseRole from "./ChooseRole"
import Outlook from "./Outlook"
import { CHARACTER_HISTORY } from '../../../../recoil';
import { CHARACTER_HISTORY_QUESTIONS } from '../../../../data/';

const TabRoleHistory = () => {
  const [ birth, setBirth ] = useRecoilState(CHARACTER_HISTORY.CHARACTER_CREATION_HISTORY_BIRTH)
  const [ raised, setRaised ] = useRecoilState(CHARACTER_HISTORY.CHARACTER_CREATION_HISTORY_RAISED)
  const [ trained, setTrained ] = useRecoilState(CHARACTER_HISTORY.CHARACTER_CREATION_HISTORY_TRAINED)
  const [ now, setNow ] = useRecoilState(CHARACTER_HISTORY.CHARACTER_CREATION_HISTORY_NOW)

  return(
    <EuiForm component="form">
      
      <ChooseRole />

      <EuiSpacer />

      <EuiAccordion id="accordionBorn" buttonContent={CHARACTER_HISTORY_QUESTIONS.born}>
        <EuiTextArea
          fullWidth
          onChange={( { target }) => setBirth(target.value)}
          value={birth}
        />
      </EuiAccordion>

      <EuiAccordion id="accordionRaised" buttonContent={CHARACTER_HISTORY_QUESTIONS.raised}>
        <EuiTextArea
          fullWidth
          onChange={( { target }) => setRaised(target.value)}
          value={raised}
        />
      </EuiAccordion>

      <EuiAccordion id="accordionTrained" buttonContent={CHARACTER_HISTORY_QUESTIONS.trained}>
        <EuiTextArea
          fullWidth
          onChange={( { target }) => setTrained(target.value)}
          value={trained}
        />
      </EuiAccordion>

      <EuiAccordion id="accordionNow" buttonContent={CHARACTER_HISTORY_QUESTIONS.now}>
        <EuiTextArea
          fullWidth
          onChange={( { target }) => setNow(target.value)}
          value={now}
        />
      </EuiAccordion>

      <Outlook />

    </EuiForm>
  )
}

export default TabRoleHistory