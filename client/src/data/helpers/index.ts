import { ATTRIBUTES_LIST } from "../metatype"

export const maxMinFactory = (max = 6, min = 1) => ( { min, max } )

export const attributeFactory = (): Attributes => {
  //@ts-expect-error ts doesn't like accessing attributes this way
  // eslint-disable-next-line
  return ATTRIBUTES_LIST.reduce(( acc, curr )=> ( acc[curr] = maxMinFactory() ,acc ), {});
}

