import { PRIORITIES } from '../../../../../../data'

export const getPriorityKeyFromRowId = (rowId: number ) => PRIORITIES.KEYS[rowId] as PriorityLetters

const defaultColumns = {
  isExpandable: false,
  isSortable: true,
  actions: { showHide: false, showMoveRight: false, showMoveLeft: false },
}

export const columns = [
  {
    id: "Priority",
    initialWidth: 80,
    ...defaultColumns
  },
  {
    id: PRIORITIES.OPTIONS.adjustment,
    ...defaultColumns
  },
  {
    id: PRIORITIES.OPTIONS.attributes,
    ...defaultColumns
  },
  {
    id: PRIORITIES.OPTIONS.skills,
    ...defaultColumns
  },
  {
    id: PRIORITIES.OPTIONS.special,
    ...defaultColumns,
  },
  {
    id: PRIORITIES.OPTIONS.resources,
    ...defaultColumns
  }
]
