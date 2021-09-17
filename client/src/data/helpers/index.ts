export const maxMinFactory = (max = 6, min = 1) => ( { min, max } )

export const attributeFactory = (attributeList: AttributeNames[]): Attributes => {
  //@ts-expect-error ts doesn't like accessing attributes this way
  // eslint-disable-next-line
  return attributeList.reduce(( acc, curr )=> ( acc[curr] = maxMinFactory() ,acc ), {});
}

