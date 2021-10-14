import { SPECIAL_POINTS_ASPECTED, SPECIAL_POINTS_DEFAULT } from './priorities'

export const TYPES: {[key: string]: string} = {
  adept: "adept",
  aspected: "aspected magician",
  full: "full magician",
  mundane: "mundane",
  mystic: "mystic adept",
  technomancer: "technomancer",
}

export const defaultAttribute = {
  name: TYPES.mundane,
  priorities: null,
  attribute: null
}


export const ATTRIBUTES: Special[] = [
  {
    name: TYPES.full,
    priorities: SPECIAL_POINTS_DEFAULT,
    attribute: "magic"
  },
  {
    name: TYPES.aspected,
    priorities: SPECIAL_POINTS_ASPECTED,
    attribute: "magic"
  },
  {
    name: TYPES.mystic,
    priorities: SPECIAL_POINTS_DEFAULT,
    attribute: "magic"
  },
  {
    name: TYPES.adept,
    priorities: SPECIAL_POINTS_DEFAULT,
    attribute: "magic"
  },
  {
    name: TYPES.technomancer,
    priorities: SPECIAL_POINTS_DEFAULT,
    attribute: "resonance"
  },
  ...[ defaultAttribute ]
]