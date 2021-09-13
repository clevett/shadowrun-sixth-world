import { attributeFactory, maxMinFactory } from "./helpers"

export const METATYPE_ATTRIBUTES = [
  "body",
  "agility",
  "reaction",
  "strength",
  "willpower",
  "logic",
  "intuition",
  "charisma",
  "edge"
]

export const METATYPES_ADJUSTMENT_POINTS = {
  A: 13,
  B: 11,
  C: 9,
  D: 4,
  E: 1,
}

export const METATYPES = [
  {
    name: "human",
    qualities: null,
    attributes: attributeFactory({ 
      edge: maxMinFactory(7) 
    }),
    adjustment: {
      priority_points: {
        ...METATYPES_ADJUSTMENT_POINTS,
        A: null,
        B: null,
      }
    },
  },
  {
    name: "dwarf",
    adjustment: {
      priority_points: METATYPES_ADJUSTMENT_POINTS
    },
    attributes: attributeFactory({
      body: maxMinFactory(7),
      reaction: maxMinFactory(5),
      strength: maxMinFactory(8),
      willpower: maxMinFactory(7),
    }),
    qualities: ["Toxin Resistance", "Thermographic Vision"],
  },
  {
    name: "elf",
    qualities: ["Low-light Vision"],
    attributes: attributeFactory({ 
      agility: maxMinFactory(7),
      charisma: maxMinFactory(8) 
    }),
    adjustment: {
      priority_points: {
        A: null,
        B: 11,
        C: 9,
        D: 4,
        E: 1,
      }
    },
  },
  {
    name: "ork",
    qualities: ["Low-light Vision", "Built Tough 1"],
    attributes: attributeFactory({ 
      body: maxMinFactory(8),
      charisma: maxMinFactory(5),
      strength: maxMinFactory(8),
    }),
    adjustment: ["body", "strength"]
  },
  {
    id: 5,
    name: "troll",
    qualities: ["Dermal Deposits", "Thermographic Vision", "Built Tough 2"],
    attributes: attributeFactory({ 
      agility: maxMinFactory(5),
      body: maxMinFactory(9),
      charisma: maxMinFactory(5),
      strength: maxMinFactory(9),
    }),
  },
]

export default METATYPES
