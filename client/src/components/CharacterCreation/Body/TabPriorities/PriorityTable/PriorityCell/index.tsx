import { useRecoilValue } from 'recoil'
import { EuiButton } from '@elastic/eui'

import {
  CHARACTER_CREATION_PRIORITIES_SPECIAL 
} from '../../../../../../recoil'
import { PRIORITIES } from "../../../../../../data"
import { getRowValue } from "./helpers"
import { centerCell } from '../helpers'

import "./styles.sass"

const PriorityCell = ({
  columnName,
  priorityLetter,
  updatePriority
}: PriorityCellProps) => {
  const special = useRecoilValue(CHARACTER_CREATION_PRIORITIES_SPECIAL)

  const handleChange = () => updatePriority(columnName, priorityLetter)

  const renderComponent = () => {
    if(columnName === PRIORITIES.OPTIONS.special && (special === "mundane" || priorityLetter === "E")) {
      return centerCell(getRowValue(columnName, priorityLetter))
    }

    return (
      <EuiButton className="priority-cell-button" onClick={handleChange}>
        {centerCell(getRowValue(columnName, priorityLetter))}
      </EuiButton>
    )
  }

  return renderComponent()
}

type PriorityCellProps = {
  columnName: PrioritiesNames,
  priorityLetter: PriorityLetters,
  updatePriority: (columnName: PrioritiesNames, priorityLetter: PriorityLetters) => void
}

export default PriorityCell
