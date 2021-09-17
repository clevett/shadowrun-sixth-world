
import { ADJUSTMENT_POINTS } from './priorities'
import { attributeFactory, maxMinFactory } from "./helpers"

export const ATTRIBUTES_LIST: AttributeNames[] = ["body", "agility", "strength", "reaction", "willpower", "logic", "intuition", "charisma",]

export const ATTRIBUTES_LIST_WITH_EDGE: AttributeNames[] = [...ATTRIBUTES_LIST, "edge"]

export const ATTRIBUTE_LIST_SPECIAL: AttributeNames[] = ["edge", "magic", "resonance"]

export const ATTRIBUTES_DEFAULTS = {
  ...attributeFactory(ATTRIBUTES_LIST_WITH_EDGE), 
  magic: maxMinFactory(6, 0), 
  resonance: maxMinFactory(6, 0) 
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
      edge: maxMinFactory(7),
    },
    qualities: QUALITIES.human,
  },
  {
    name: METATYPES.dwarf,
    adjustment_points: ADJUSTMENT_POINTS,
    attributes: {
      ...ATTRIBUTES_DEFAULTS,
      body: maxMinFactory(7),
      reaction: maxMinFactory(5),
      strength: maxMinFactory(8),
      willpower: maxMinFactory(7),
    },
    qualities: QUALITIES.dwarf,
  },
  {
    name: METATYPES.elf,
    attributes: { 
      ...ATTRIBUTES_DEFAULTS,
      agility: maxMinFactory(7),
      charisma: maxMinFactory(8) 
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
      body: maxMinFactory(8),
      charisma: maxMinFactory(5),
      strength: maxMinFactory(8),
    },
    qualities: QUALITIES.ork,
  },
  {
    name: METATYPES.troll,
    adjustment_points: ADJUSTMENT_POINTS,
    attributes: { 
      ...ATTRIBUTES_DEFAULTS,
      agility: maxMinFactory(5),
      body: maxMinFactory(9),
      charisma: maxMinFactory(5),
      strength: maxMinFactory(9),
    },
    qualities: QUALITIES.troll,
  },
]

export default METATYPES
