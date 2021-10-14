export const ATTRIBUTES_LIST = [
  "body", 
  "agility", 
  "strength", 
  "reaction", 
  "willpower", 
  "logic", 
  "intuition", 
  "charisma",
]

export const ATTRIBUTES_LIST_WITH_EDGE = [...ATTRIBUTES_LIST, "edge"]

export const ATTRIBUTE_LIST_SPECIAL = ["magic", "resonance"]

export const ADJUSTMENT_LIST = [ "edge", "magic", "resonance"]

export const ATTRIBUTES_LIST_WITH_SPECIAL = [
  ...ATTRIBUTES_LIST_WITH_EDGE,
   ...ATTRIBUTE_LIST_SPECIAL
]
