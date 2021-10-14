const getAdjustmentValues = ( values: AttributesAdjustment[] ) => {
  return values.map(attribute => attribute.adjustment)
}

export default getAdjustmentValues