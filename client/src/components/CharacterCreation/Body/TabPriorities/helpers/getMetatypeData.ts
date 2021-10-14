import { METATYPE } from '../../../../../data';

const getMetatypeData = ( metatype: string ) => {
  return METATYPE.ATTRIBUTES.find(meta => meta.name === metatype)
}

export default getMetatypeData