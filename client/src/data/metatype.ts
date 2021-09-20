
import { ADJUSTMENT_POINTS } from './priorities'
import { attributeFactory, maxMinFactory } from "./helpers"

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
  "dwarf": "dwarf",
  "elf": "elf",
  "human": "human",
  "ork": "ork",
  "troll": "troll",
}

export const ATTRIBUTES: Metatype[] = [
  {
    name: METATYPES.human,
    adjustment_points:{
      ...ADJUSTMENT_POINTS,
      A: null,
      B: null,
    },
    attributes: [
      {
        name: "edge",
        ...maxMinFactory(7)
      },
  ],
    qualities: null,
  },
  {
    name: METATYPES.dwarf,
    adjustment_points: ADJUSTMENT_POINTS,
    attributes: [
      {
        name: "body",
        ...maxMinFactory(7)
      },
      {
        name: "strength",
        ...maxMinFactory(8)
      },
      {
        name: "reaction",
        ...maxMinFactory(5)
      },
      {
        name: "willpower",
        ...maxMinFactory(7)
      }
    ],
    qualities: ["Toxin Resistance", "Thermographic Vision"],
  },
  {
    name: METATYPES.elf,
    attributes:[
      {
        name: "agility",
        ...maxMinFactory(7)
      },
      {
        name: "charisma",
        ...maxMinFactory(8)
      },
    ],
    adjustment_points: {
      ...ADJUSTMENT_POINTS,
      A: null,
    },
    qualities: ["Low-light Vision"],
  },
  {
    name: METATYPES.ork,
    adjustment_points: ADJUSTMENT_POINTS,
    attributes: [
      {
        name: "body",
        ...maxMinFactory(8)
      },
      {
        name: "strength",
        ...maxMinFactory(8)
      },
      {
        name: "charisma",
        ...maxMinFactory(5)
      }
    ],
    qualities: ["Low-light Vision", "Built Tough 1"],
  },
  {
    name: METATYPES.troll,
    adjustment_points: ADJUSTMENT_POINTS,
    attributes:  [
      {
        name: "body",
        ...maxMinFactory(9)
      },
      {
        name: "agility",
        ...maxMinFactory(5)
      },
      {
        name: "strength",
        ...maxMinFactory(9)
      },
      {
        name: "charisma",
        ...maxMinFactory(5)
      }
    ],
    qualities: ["Dermal Deposits", "Thermographic Vision", "Built Tough 2"],
  },
]

export default METATYPES
