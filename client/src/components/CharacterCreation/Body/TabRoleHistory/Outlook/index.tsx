import { useRecoilState } from "recoil"
import { EuiAccordion, EuiFieldText, EuiFormRow, EuiTextArea } from '@elastic/eui'

import { CHARACTER_HISTORY } from '../../../../../recoil';

import { CHARACTER_HISTORY_QUESTIONS } from '../../../../../data/';

const Outlook = () => {
  const [ aspect, setAspect ] = useRecoilState(CHARACTER_HISTORY.CHARACTER_CREATION_OUTLOOK_ASPECT)
  const [ injustices, setInjustice ] = useRecoilState(CHARACTER_HISTORY.CHARACTER_CREATION_OUTLOOK_INJUSTICE)
  const [ substances, setSubstances ] = useRecoilState(CHARACTER_HISTORY.CHARACTER_CREATION_OUTLOOK_SUBSTANCES)
  const [ trafficking, setTrafficking ] = useRecoilState(CHARACTER_HISTORY.CHARACTER_CREATION_OUTLOOK_TRAFFICKING)
  const [ wetwork, setWetwork ] = useRecoilState(CHARACTER_HISTORY.CHARACTER_CREATION_OUTLOOK_WETWORK)

  return (
    <EuiAccordion id="accordionAspect" buttonContent={CHARACTER_HISTORY_QUESTIONS.aspect}>
      <EuiTextArea
        fullWidth
        onChange={( { target } ) => setAspect(target.value)}
        value={aspect}
      />

      <EuiFormRow label="Wetwork" helpText="How does your character feel about murder for hire?">
        <EuiFieldText 
          name="wetwork"
          onChange={( { target } ) => setWetwork(target.value)}
          value={wetwork}
        />
      </EuiFormRow>
      
      <EuiFormRow label="Substances" helpText="How does your character feel about extreme use of substances?">
        <EuiFieldText 
          name="substances"
          onChange={( { target } ) => setSubstances(target.value)}
          value={substances}
        />
      </EuiFormRow>

      <EuiFormRow label="Trafficking" helpText="How does your character feel about jobs moving people?">
        <EuiFieldText 
          name="trafficking"
          onChange={( { target } ) => setTrafficking(target.value)}
          value={trafficking}
        />
      </EuiFormRow>

      <EuiFormRow label="Injustice" helpText="How does your character feel about the status quo of inequality for corporate profit?">
        <EuiFieldText 
          name="wetwork"
          onChange={( { target } ) => setInjustice(target.value)}
          value={injustices}
        />
      </EuiFormRow>
    </EuiAccordion>
  )
}

export default Outlook