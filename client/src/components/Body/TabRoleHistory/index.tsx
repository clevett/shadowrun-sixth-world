import { EuiForm, EuiFormRow, EuiFieldText } from '@elastic/eui'

const TabRoleHistory = () => {
  return(
    <EuiForm component="form">
      <EuiFormRow label="Text field" helpText="I am some friendly help text.">
        <EuiFieldText name="first" />
      </EuiFormRow>

      <EuiFormRow label="Disabled through form row" isDisabled>
        <EuiFieldText name="last" />
      </EuiFormRow>
    </EuiForm>
  )
}

export default TabRoleHistory