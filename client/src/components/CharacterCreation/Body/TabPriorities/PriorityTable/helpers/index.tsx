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
    initialWidth: 120,
    ...defaultColumns
  },
  {
    id: PRIORITIES.OPTIONS.attributes,
    initialWidth: 120,
    ...defaultColumns
  },
  {
    id: PRIORITIES.OPTIONS.skills,
    initialWidth: 120,
    ...defaultColumns
  },
  {
    id: PRIORITIES.OPTIONS.special,
    ...defaultColumns,
  },
  {
    id: PRIORITIES.OPTIONS.resources,
    initialWidth: 120,
    ...defaultColumns
  }
]

export const centerCell = (value: string | number) => <><div className="text-align-center">{value}</div></>