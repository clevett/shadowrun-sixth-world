import { useSetRecoilState } from "recoil"
import { EuiDataGrid, EuiTextAlign } from '@elastic/eui';

import { PRIORITIES } from "../../../../../data"
import { CHARACTER_PRIORITIES } from '../../../../../recoil'

import { 
  columns, 
  getMetatypeAdjustmentPoints, 
  getPriorityKeyFromRowId, 
  isColumnAdjustmentPoints 
} from './helpers';

import PriorityCell from './PriorityCell'

import "./styles.sass"

const PriorityTable = ({
  metatypeData
}: PriorityTableProps) => {
  const setA = useSetRecoilState(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_A)
  const setB = useSetRecoilState(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_B)
  const setC = useSetRecoilState(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_C)
  const setD = useSetRecoilState(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_D)
  const setE = useSetRecoilState(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_E)

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
    const priorityLetter = getPriorityKeyFromRowId(rowId)

    if ( columnId === "Priority") {
      return (
        <EuiTextAlign textAlign="center">
          { PRIORITIES.KEYS[rowId]}
        </EuiTextAlign>
      )
    } else {
      const checkAdjustmentPriorityNull = !getMetatypeAdjustmentPoints(metatypeData, priorityLetter) && isColumnAdjustmentPoints(columnId)

      if (checkAdjustmentPriorityNull) {
        return (
          <EuiTextAlign className="text-transform-capitalize" textAlign="center">
            {"-"}
          </EuiTextAlign>
        )
      }

      return (
        <PriorityCell
          columnName={columnId} 
          priorityLetter={priorityLetter}
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
    <EuiDataGrid
      className={"text-align-center"}
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
        footer: 'overline',
      }}
    />
  )
}

type PriorityTableProps = {
  metatypeData: Metatype
}

export default PriorityTable