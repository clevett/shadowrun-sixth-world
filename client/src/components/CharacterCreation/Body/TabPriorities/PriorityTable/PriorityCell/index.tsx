import { PRIORITIES } from "../../../../../../data"
import { GetSpecialColumnText } from "./../helpers"
import { convertIntIntoNuyen } from "../../../../helpers"
import { findPriorityByLetter } from "../helpers"

const PriorityCell = ({
  columnName,
  priorityLetter,
}: PriorityCellProps) => {
  const centerCell = (value: string | number) => <><div className="text-align-center">{value}</div></>
  let rowValue: string | number = ""

  if (columnName === PRIORITIES.OPTIONS.special) {
    rowValue = GetSpecialColumnText(priorityLetter)
  } else {
    const priorityValues = findPriorityByLetter(priorityLetter)
    const priorityValue = priorityValues && priorityValues[`${columnName}`]
  
    if (!priorityValue) {
      rowValue =  "Unable find value"
    } else {
      rowValue = columnName === PRIORITIES.OPTIONS.resources 
      ? convertIntIntoNuyen(priorityValue) 
      : priorityValue
    }
  }

  return centerCell(rowValue)
}

type PriorityCellProps = {
  columnName: PrioritiesNames,
  priorityLetter: PriorityLetters,
}

export default PriorityCell
