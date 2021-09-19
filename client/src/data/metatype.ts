
import { ADJUSTMENT_POINTS } from './priorities'
import { attributeFactory, maxMinFactory } from "./helpers"
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
    attributes: [
      {
        //@ts-expect-error type showing up wrong
        name: "edge",
        ...maxMinFactory(7)
      },
  ],
    qualities: QUALITIES.human,
  },
  {
    name: METATYPES.dwarf,
    adjustment_points: ADJUSTMENT_POINTS,
    attributes: [
      {
        //@ts-expect-error type showing up wrong
        name: "body",
        ...maxMinFactory(7)
      },
      {
        //@ts-expect-error type showing up wrong
        name: "strength",
        ...maxMinFactory(5)
      },
      {
        //@ts-expect-error type showing up wrong
        name: "reaction",
        ...maxMinFactory(8)
      },
      {
        //@ts-expect-error type showing up wrong
        name: "willpower",
        ...maxMinFactory(7)
      }
    ],
    qualities: QUALITIES.dwarf,
  },
  {
    name: METATYPES.elf,
    attributes:[
      {
        //@ts-expect-error type showing up wrong
        name: "agility",
        ...maxMinFactory(7)
      },
      {
        //@ts-expect-error type showing up wrong
        name: "charisma",
        ...maxMinFactory(8)
      },
    ],
    adjustment_points: {
      ...ADJUSTMENT_POINTS,
      A: null,
    },
    qualities: QUALITIES.elf,
  },
  {
    name: METATYPES.ork,
    adjustment_points: ADJUSTMENT_POINTS,
    attributes: [
      {
        //@ts-expect-error type showing up wrong
        name: "body",
        ...maxMinFactory(8)
      },
      {
        //@ts-expect-error type showing up wrong
        name: "strength",
        ...maxMinFactory(5)
      },
      {
        //@ts-expect-error type showing up wrong
        name: "charisma",
        ...maxMinFactory(8)
      }
    ],
    qualities: QUALITIES.ork,
  },
  {
    name: METATYPES.troll,
    adjustment_points: ADJUSTMENT_POINTS,
    attributes:  [
      {
        //@ts-expect-error type showing up wrong
        name: "body",
        ...maxMinFactory(9)
      },
      {
        //@ts-expect-error type showing up wrong
        name: "agility",
        ...maxMinFactory(5)
      },
      {
        //@ts-expect-error type showing up wrong
        name: "strength",
        ...maxMinFactory(9)
      },
      {
        //@ts-expect-error type showing up wrong
        name: "charisma",
        ...maxMinFactory(5)
      }
    ],
    qualities: QUALITIES.troll,
  },
]

export default METATYPES
