
import { ADJUSTMENT_POINTS } from './priorities'
import { attributeFactory } from "./helpers"
import { ATTRIBUTE_LIST_SPECIAL } from "./special"

export const ATTRIBUTES_LIST: AttributeNames[] = ["body", "agility", "strength", "reaction", "willpower", "logic", "intuition", "charisma",]

export const ATTRIBUTES_LIST_WITH_EDGE: AttributeNames[] = [...ATTRIBUTES_LIST, "edge"]

export const ATTRIBUTES_LIST_WITH_SPECIAL = [
  ...ATTRIBUTES_LIST_WITH_EDGE,
   ...ATTRIBUTE_LIST_SPECIAL
]

export const ATTRIBUTES_DEFAULTS = {
  body: attributeFactory(),
  agility: attributeFactory(),
  strength: attributeFactory(),
  reaction: attributeFactory(),
  willpower: attributeFactory(),
  logic: attributeFactory(),
  intuition: attributeFactory(),
  edge: attributeFactory(),
  charisma: attributeFactory(),
  magic: attributeFactory(6, 0), 
  resonance: attributeFactory(6, 0) 
}

export const METATYPES = {
  dwarf: "dwarf",
  elf: "elf",
  human: "human",
  ork: "ork",
  troll: "troll",
}

export const QUALITIES = {
  dwarf: ["Toxin Resistance", "Thermographic Vision"],
  elf: ["Low-light Vision"],
  human: null,
  ork: ["Low-light Vision", "Built Tough 1"],
  troll: ["Dermal Deposits", "Thermographic Vision", "Built Tough 2"],
}

export const ATTRIBUTES: Metatype[] = [
  {
    name: METATYPES.human,
    adjustment_points:{
      ...ADJUSTMENT_POINTS,
      A: null,
      B: null,
    },
    attributes: {
      ...ATTRIBUTES_DEFAULTS,
      edge: attributeFactory(7),
    },
    qualities: QUALITIES.human,
  },
  {
    name: METATYPES.dwarf,
    adjustment_points: ADJUSTMENT_POINTS,
    attributes: {
      ...ATTRIBUTES_DEFAULTS,
      body: attributeFactory(7),
      reaction: attributeFactory(5),
      strength: attributeFactory(8),
      willpower: attributeFactory(7),
    },
    qualities: QUALITIES.dwarf,
  },
  {
    name: METATYPES.elf,
    attributes: { 
      ...ATTRIBUTES_DEFAULTS,
      agility: attributeFactory(7),
      charisma: attributeFactory(8) 
    },
    adjustment_points: {
      ...ADJUSTMENT_POINTS,
      A: null,
    },
    qualities: QUALITIES.elf,
  },
  {
    name: METATYPES.ork,
    adjustment_points: ADJUSTMENT_POINTS,
    attributes: {
      ...ATTRIBUTES_DEFAULTS,
      body: attributeFactory(8),
      charisma: attributeFactory(5),
      strength: attributeFactory(8),
    },
    qualities: QUALITIES.ork,
  },
  {
    name: METATYPES.troll,
    adjustment_points: ADJUSTMENT_POINTS,
    attributes: { 
      ...ATTRIBUTES_DEFAULTS,
      agility: attributeFactory(5),
      body: attributeFactory(9),
      charisma: attributeFactory(5),
      strength: attributeFactory(9),
    },
    qualities: QUALITIES.troll,
  },
]

export default METATYPES
