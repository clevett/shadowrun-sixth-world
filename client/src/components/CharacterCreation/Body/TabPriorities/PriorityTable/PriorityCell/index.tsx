import { useEffect } from "react"
import { useRecoilState, useRecoilValue } from 'recoil'
import { EuiButton } from '@elastic/eui'

import CellText from "./CellText"
import { CHARACTER_CREATION_PRIORITIES_SPECIAL, WITH_PRIORITIES } from '../../../../../../recoil'
import { PRIORITIES, SPECIAL } from "../../../../../../data"
import { getPreviousKey } from "./helpers"

import "./styles.sass"

const PriorityCell = ({
  columnName,
  priorityLetter,
  updatePriority
}: PriorityCellProps) => {
  const priorities = useRecoilValue(WITH_PRIORITIES)
  const [ special, setSpecial ] = useRecoilState(CHARACTER_CREATION_PRIORITIES_SPECIAL)
  const filled = priorities[priorityLetter] === columnName

  useEffect(() => {
    if( special === SPECIAL.TYPES.mundane && priorities.E !== PRIORITIES.OPTIONS.special) {
      const previousKey = getPreviousKey(priorities, PRIORITIES.OPTIONS.special)
      const previousName = priorities.E
      
      previousKey && updatePriority(previousName, previousKey)
      updatePriority(PRIORITIES.OPTIONS.special, "E")
    }

    if (special !== SPECIAL.TYPES.mundane && priorities.E === PRIORITIES.OPTIONS.special) {
      updatePriority(PRIORITIES.OPTIONS.special, "D")
      updatePriority(priorities.D, "E")
    }
  }, [ special ])

  const handleChange = () => {
    const previousKey = getPreviousKey(priorities, columnName)
    const previousName = priorities[priorityLetter]

    previousKey && updatePriority(previousName, previousKey)

    if (columnName === PRIORITIES.OPTIONS.special && priorityLetter === "E") {
      setSpecial(SPECIAL.TYPES.mundane)
    }

    updatePriority(columnName, priorityLetter)
  }

  const content = () => <CellText columnName={columnName} priorityLetter={priorityLetter} />

  return (
    <EuiButton className="priority-cell-button" onClick={handleChange} size="s" fill={filled}>
      {content()}
    </EuiButton>
  )
}

type PriorityCellProps = {
  columnName: PrioritiesNames,
  priorityLetter: PriorityLetters,
  updatePriority: (columnName: PrioritiesNames, priorityLetter: PriorityLetters) => void
}

export default PriorityCell
