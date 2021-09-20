const findMaxExceptions = (metatypeAttributes: MetatypeAttribute[], attributeName: string) => {
  return metatypeAttributes.find(metaAttribute => metaAttribute.name === attributeName )
}

export default findMaxExceptions