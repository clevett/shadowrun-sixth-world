import { EuiDataGrid } from '@elastic/eui';

import { PRIORITIES } from "../../../../../data"

import "./styles.sass"
import PriorityCell from './PriorityCell';

const PriorityTable = () => {
  const defaultColumns = {
    isExpandable: false,
    isSortable: true,
    actions: { showHide: false, showMoveRight: false, showMoveLeft: false },
  }

  const columns = [
    {
      id: "Priority",
      initialWidth: 100,
      ...defaultColumns
    },
    {
      id: PRIORITIES.OPTIONS.adjustment,
      initialWidth: 100,
      ...defaultColumns
    },
    {
      id: PRIORITIES.OPTIONS.attributes,
      initialWidth: 100,
      ...defaultColumns
    },
    {
      id: PRIORITIES.OPTIONS.skills,
      initialWidth: 100,
      ...defaultColumns
    },
    {
      id: PRIORITIES.OPTIONS.special,
      ...defaultColumns,
      isExpandable: true,
    },
    {
      id: PRIORITIES.OPTIONS.resources,
      initialWidth: 100,
      ...defaultColumns
    }
  ]

  const centerCell = (value: string | number) => <><div className="text-align-center">{value}</div></>

  const getPriorityKeyFromRowId = (rowId: number ) => PRIORITIES.KEYS[rowId] as PriorityLetters

  const dataSwitch = (rowId:number, columnId: PrioritiesNames | "Priority") => {
    if ( columnId === "Priority") {
      return centerCell( PRIORITIES.KEYS[rowId] )
    } else {
      return <PriorityCell columnName={columnId} priorityLetter={getPriorityKeyFromRowId(rowId)}/>
    }
  }

  const columnVisibility = {
    visibleColumns: columns.map(column => column.id),
    setVisibleColumns: () => {},
  }

  return (
    <div className="text-align-center">
      <EuiDataGrid
        aria-labelledby="priorities table"
        columnVisibility={columnVisibility}
        columns={columns}
        //@ts-expect-error columnId needs to be a string
        renderCellValue={({ rowIndex, columnId }) => dataSwitch(rowIndex, columnId)}
        rowCount={5}
        toolbarVisibility={false}
        gridStyle={{
          border: 'all',
          stripes: true,
          rowHover: 'highlight',
          header: 'shade',
          fontSize: 'm',
          cellPadding: 'm',
          footer: 'overline'
        }}
      />
    </div>
  )
}

export default PriorityTable