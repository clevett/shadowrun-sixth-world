import { useRecoilState } from "recoil"
import { EuiDataGrid } from '@elastic/eui';

import { PRIORITIES } from "../../../../../data"
import {
  CHARACTER_CREATION_PRIORITIES_A,
  CHARACTER_CREATION_PRIORITIES_B,
  CHARACTER_CREATION_PRIORITIES_C,
  CHARACTER_CREATION_PRIORITIES_D,
  CHARACTER_CREATION_PRIORITIES_E,
} from '../../../../../recoil'

import { columns, centerCell, getPriorityKeyFromRowId } from './helpers';

import PriorityCell from './PriorityCell'

import "./styles.sass"

const PriorityTable = () => {
  const [A, setA] = useRecoilState(CHARACTER_CREATION_PRIORITIES_A)
  const [B, setB] = useRecoilState(CHARACTER_CREATION_PRIORITIES_B)
  const [C, setC] = useRecoilState(CHARACTER_CREATION_PRIORITIES_C)
  const [D, setD] = useRecoilState(CHARACTER_CREATION_PRIORITIES_D)
  const [E, setE] = useRecoilState(CHARACTER_CREATION_PRIORITIES_E)

  console.table({ A, B, C, D, E })

  const updatePriority = (priorityName: PrioritiesNames, priorityLetter: PriorityLetters) => {
    switch(priorityLetter) {
      case "A":
        setA(priorityName)
        break
      case "B":
        setB(priorityName)
        break
      case "C":
        setC(priorityName)
        break
      case "D":
        setD(priorityName)
        break
      case "E":
        setE(priorityName)
        break
    }
  }

  const dataSwitch = (rowId:number, columnId: PrioritiesNames | "Priority") => {
    if ( columnId === "Priority") {
      return centerCell( PRIORITIES.KEYS[rowId] )
    } else {
      return (
        <PriorityCell
          columnName={columnId} 
          priorityLetter={getPriorityKeyFromRowId(rowId)}
          updatePriority={updatePriority}
        />
      )
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