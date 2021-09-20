import { SPECIAL } from '../../../../../data'

const findSpecialData = ( specialName: string ) => {
  return SPECIAL.ATTRIBUTES.find(special => special.name === specialName)
}

export default findSpecialData