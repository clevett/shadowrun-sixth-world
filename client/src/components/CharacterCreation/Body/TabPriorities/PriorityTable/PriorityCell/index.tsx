import { useRecoilValue } from 'recoil'
import { EuiButton } from '@elastic/eui'

import CellText from "./CellText"
import { CHARACTER_PRIORITIES, WITH_PRIORITIES } from '../../../../../../recoil'
import { PRIORITIES, SPECIAL } from "../../../../../../data"
import { findPriorityKey } from "./helpers"

import "./styles.sass"

const PriorityCell = ({
  columnName,
  priorityLetter,
  updatePriority
}: PriorityCellProps) => {
  const priorities = useRecoilValue(WITH_PRIORITIES.GET_PRIORITIES)
  const special = useRecoilValue(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_SPECIAL)
  
  const fillButton = priorities[priorityLetter] === columnName
  const columnNameIsSpecial = columnName === PRIORITIES.OPTIONS.special
  const priorityLetterIsE = priorityLetter === "E"
  const characterIsMundane = special === SPECIAL.TYPES.mundane

  const handleChange = () => {
    const previousKey = findPriorityKey(priorities, columnName)
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
