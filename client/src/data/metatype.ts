import { PRIORITY_ADJUSTMENT_POINTS } from "./"
import { attributeFactory, maxMinFactory } from "./helpers"

export const METATYPE_ATTRIBUTES = ["agility","body","charisma","edge","intuition","logic","reaction","strength","willpower"]

export const METATYPE_ATTRIBUTES_DEFAULTS = attributeFactory()

export const METATYPES: Metatype[] = [
  {
    name: "human",
    adjustment_points:{
      ...PRIORITY_ADJUSTMENT_POINTS,
      A: null,
      B: null,
    },
    attributes: {
      ...METATYPE_ATTRIBUTES_DEFAULTS,
      edge: maxMinFactory(7),
    },
    qualities: null,
  },
  {
    name: "dwarf",
    adjustment_points: PRIORITY_ADJUSTMENT_POINTS,
    attributes: {
      ...METATYPE_ATTRIBUTES_DEFAULTS,
      body: maxMinFactory(7),
      reaction: maxMinFactory(5),
      strength: maxMinFactory(8),
      willpower: maxMinFactory(7),
    },
    qualities: ["Toxin Resistance", "Thermographic Vision"],
  },
  {
    name: "elf",
    qualities: ["Low-light Vision"],
    attributes: { 
      ...METATYPE_ATTRIBUTES_DEFAULTS,
      agility: maxMinFactory(7),
      charisma: maxMinFactory(8) 
    },
    adjustment_points: {
      ...PRIORITY_ADJUSTMENT_POINTS,
      A: null,
    },
  },
  {
    name: "ork",
    adjustment_points: PRIORITY_ADJUSTMENT_POINTS,
    attributes: {
      ...METATYPE_ATTRIBUTES_DEFAULTS,
      body: maxMinFactory(8),
      charisma: maxMinFactory(5),
      strength: maxMinFactory(8),
    },
    qualities: ["Low-light Vision", "Built Tough 1"],
  },
  {
    name: "troll",
    adjustment_points: PRIORITY_ADJUSTMENT_POINTS,
    attributes: { 
      ...METATYPE_ATTRIBUTES_DEFAULTS,
      agility: maxMinFactory(5),
      body: maxMinFactory(9),
      charisma: maxMinFactory(5),
      strength: maxMinFactory(9),
    },
    qualities: ["Dermal Deposits", "Thermographic Vision", "Built Tough 2"],
  },
]

export default METATYPES
