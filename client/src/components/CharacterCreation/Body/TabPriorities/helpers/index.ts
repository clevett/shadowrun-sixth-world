import { METATYPE } from '../../../../../data';

export const getMetatypeData = (metatype: string) => METATYPE.ATTRIBUTES.find(meta => meta.name === metatype)