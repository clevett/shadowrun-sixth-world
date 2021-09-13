import { METATYPE_ATTRIBUTES } from "../metatype"

export const maxMinFactory = (max = 6, min = 1) => ( { min, max } )

export const attributeFactory = (): Attributes => {
  //@ts-expect-error ts doesn't like accessing attributes this way
  // eslint-disable-next-line
  return METATYPE_ATTRIBUTES.reduce(( acc, curr )=> ( acc[curr] = maxMinFactory() ,acc ), {});
}

