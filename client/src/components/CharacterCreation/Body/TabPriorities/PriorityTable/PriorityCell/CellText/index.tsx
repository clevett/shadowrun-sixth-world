import { EuiTextAlign } from '@elastic/eui'
import { getRowValue } from '../helpers'

const CellText = ({ columnName, priorityLetter}: CellProps) => {
  return (
    <EuiTextAlign className="text-transform-capitalize" textAlign="center">
      {getRowValue(columnName, priorityLetter)}
    </EuiTextAlign>
  )
}

export type CellProps = {
  columnName: PrioritiesNames,
  priorityLetter: PriorityLetters,
}

export default CellText