import { useEffect } from "react"
import { useRecoilValue } from 'recoil'
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
  const special = useRecoilValue(CHARACTER_CREATION_PRIORITIES_SPECIAL)
  
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
    updatePriority(columnName, priorityLetter)
  }

  const content = () => <CellText columnName={columnName} priorityLetter={priorityLetter} />

  const mundaneCharacterCannotSelectMagic = columnNameIsSpecial && !priorityLetterIsE && characterIsMundane
  const mundaneCharactersCannotSelectE = !columnNameIsSpecial && priorityLetterIsE && characterIsMundane
  const magicCharactersCannotSelectE = columnNameIsSpecial && priorityLetterIsE && !characterIsMundane
  if ( mundaneCharacterCannotSelectMagic ||  mundaneCharactersCannotSelectE || magicCharactersCannotSelectE) {
    return content()
  }

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
