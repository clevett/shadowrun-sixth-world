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
  
  const fillButton = priorities[priorityLetter] === columnName
  const columnNameIsSpecial = columnName === PRIORITIES.OPTIONS.special
  const priorityLetterIsE = priorityLetter === "E"
  const characterIsMundane = special === SPECIAL.TYPES.mundane

  useEffect(() => {
    if( characterIsMundane && priorities.E !== PRIORITIES.OPTIONS.special) {
      const previousKey = getPreviousKey(priorities, PRIORITIES.OPTIONS.special)
      const previousName = priorities.E
      
      previousKey && updatePriority(previousName, previousKey)
      updatePriority(PRIORITIES.OPTIONS.special, "E")
    }
  }, [ special, priorities, updatePriority, characterIsMundane ])

  const handleChange = () => {
    const previousKey = getPreviousKey(priorities, columnName)
    const previousName = priorities[priorityLetter]

    previousKey && updatePriority(previousName, previousKey)

    if (!columnNameIsSpecial && priorityLetterIsE) {
      setSpecial(SPECIAL.TYPES.full)
    }

    updatePriority(columnName, priorityLetter)
  }

  const content = () => <CellText columnName={columnName} priorityLetter={priorityLetter} />

  if (columnNameIsSpecial && !priorityLetterIsE && characterIsMundane) {
    return content()
  }

  if (columnNameIsSpecial && priorityLetterIsE && !characterIsMundane) {
    return content()
  }

  if (!columnNameIsSpecial && priorityLetterIsE && characterIsMundane) {
    return content()
  }

  console.table({

  })

  return (
    <EuiButton className="priority-cell-button" onClick={handleChange} size="s" fill={fillButton}>
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
