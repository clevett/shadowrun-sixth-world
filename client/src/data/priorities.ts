import { TYPES as MAGIC_TYPES } from "./special"

export const KEYS = [ "A", "B", "C", "D", "E"]

export const OPTIONS: {[key:string]: PrioritiesNames} = {
  attributes: "Attributes",
  adjustment: "Adjustment Points",
  skills: "Skills",
  special: "Special",
  resources: "Resources"
}

export const ADJUSTMENT_POINTS: Priorities = { 
  A: 13, 
  B: 11, 
  C: 9, 
  D: 4, 
  E: 1 
}

export const ATTRIBUTE_POINTS: Priorities = { 
  A: 24, 
  B: 16, 
  C: 12, 
  D: 8, 
  E: 2 
}

export const SKILL_POINTS: Priorities = { 
  A: 32, 
  B: 24, 
  C: 20, 
  D: 16, 
  E: 10 
}

export const RESOURCES: Priorities = { 
  A: 450000, 
  B: 275000, 
  C: 150000, 
  D: 50000, 
  E: 8000 
}

export const SPECIAL_POINTS_DEFAULT: Priorities = { 
  A: 4, 
  B: 3, 
  C: 2, 
  D: 1, 
  E: 0 
}

export const SPECIAL_POINTS_ASPECTED: Priorities = { 
  A: 5, 
  B: 4, 
  C: 3, 
  D: 2, 
  E: 0 
}

export const SPECIAL: Special[] = [
  {
    name: MAGIC_TYPES.full,
    priorities: SPECIAL_POINTS_DEFAULT,
    attribute: "magic"
  },
  {
    name: MAGIC_TYPES.aspected,
    priorities: SPECIAL_POINTS_ASPECTED,
    attribute: "magic"
  },
  {
    name: MAGIC_TYPES.mystic,
    priorities: SPECIAL_POINTS_DEFAULT,
    attribute: "magic"
  },
  {
    name: MAGIC_TYPES.adept,
    priorities: SPECIAL_POINTS_DEFAULT,
    attribute: "magic"
  },
  {
    name: MAGIC_TYPES.technomancer,
    priorities: SPECIAL_POINTS_DEFAULT,
    attribute: "resonance"
  },
]


export const VALUES: PrioritiesNumerical[] = [
  {
    //@ts-expect-error Type 'string' is not assignable to type 'PriorityLetters'
    name: KEYS[0],
    [OPTIONS.adjustment]: ADJUSTMENT_POINTS.A,
    [OPTIONS.attributes]: ATTRIBUTE_POINTS.A,
    [OPTIONS.resources]: RESOURCES.A,
    [OPTIONS.skills]: SKILL_POINTS.A,
  },
  {
     //@ts-expect-error Type 'string' is not assignable to type 'PriorityLetters'
    name: KEYS[1],
    [OPTIONS.adjustment]: ADJUSTMENT_POINTS.B,
    [OPTIONS.attributes]: ATTRIBUTE_POINTS.B,
    [OPTIONS.resources]: RESOURCES.B,
    [OPTIONS.skills]: SKILL_POINTS.B,
  },
  {
    //@ts-expect-error Type 'string' is not assignable to type 'PriorityLetters'
    name: KEYS[2],
    [OPTIONS.adjustment]: ADJUSTMENT_POINTS.C,
    [OPTIONS.attributes]: ATTRIBUTE_POINTS.C,
    [OPTIONS.resources]: RESOURCES.C,
    [OPTIONS.skills]: SKILL_POINTS.C,
  },
  {
     //@ts-expect-error Type 'string' is not assignable to type 'PriorityLetters'
    name: KEYS[3],
    [OPTIONS.adjustment]: ADJUSTMENT_POINTS.D,
    [OPTIONS.attributes]: ATTRIBUTE_POINTS.D,
    [OPTIONS.resources]: RESOURCES.D,
    [OPTIONS.skills]: SKILL_POINTS.D,
  },
  {
     //@ts-expect-error Type 'string' is not assignable to type 'PriorityLetters'
    name: KEYS[4],
    [OPTIONS.adjustment]: ADJUSTMENT_POINTS.E,
    [OPTIONS.attributes]: ATTRIBUTE_POINTS.E,
    [OPTIONS.resources]: RESOURCES.E,
    [OPTIONS.skills]: SKILL_POINTS.E,
  }
]
