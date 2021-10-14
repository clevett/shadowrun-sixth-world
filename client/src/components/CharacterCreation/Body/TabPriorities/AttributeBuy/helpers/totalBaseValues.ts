import getAttributeValues from './getAttributeValues'
import totalArrayNumbers from '../../helpers/totalArrayNumbers'

const totalBaseValues = ( attributes: AttributesBase[] ) => {
  const intArray = getAttributeValues(attributes)
  return totalArrayNumbers( intArray )
}

export default totalBaseValues