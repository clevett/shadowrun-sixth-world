import { PRIORITIES, SPECIAL } from '../../../../../../data'

const getSpecialAttribute = ( special: string ) => {
  if (special !== SPECIAL.TYPES.mundane) {
    const specialType = PRIORITIES.SPECIAL.find(specialType => specialType.name === special)
    return specialType?.attribute
  }
}

export default getSpecialAttribute