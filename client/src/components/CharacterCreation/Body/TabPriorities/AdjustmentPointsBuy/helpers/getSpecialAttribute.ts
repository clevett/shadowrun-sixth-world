import { SPECIAL } from '../../../../../../data'

const getSpecialAttribute = ( special: string ) => {
  if (special !== SPECIAL.TYPES.mundane) {
    const specialType = SPECIAL.ATTRIBUTES.find(specialType => specialType.name === special)
    return specialType?.attribute
  }
}

export default getSpecialAttribute