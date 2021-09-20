import totalArrayNumbers from '../../helpers/totalArrayNumbers'
import getAdjustmentValues from './getAdjustmentValues'

const totalAdjustmentValues = ( attributes: AttributesAdjustment[] ) => {
  const intArray = getAdjustmentValues(attributes)
  return totalArrayNumbers( intArray )
}

export default totalAdjustmentValues