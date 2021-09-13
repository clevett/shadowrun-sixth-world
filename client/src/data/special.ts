const SPECIAL_DEFAULT = {
  A: 4,
  B: 3,
  C: 2,
  D: 1,
  E: 0
}

export const SPECIAL_PRIORITIES = [
  {
    name: "full magician",
    priorities: SPECIAL_DEFAULT,
    attribute: "magic"
  },
  {
    name: "aspected magician",
    priorities: {
      A: 5,
      B: 4,
      C: 3,
      D: 2,
      E: 0
    },
    attribute: "magic"
  },
  {
    name: "mystic adept",
    priorities: SPECIAL_DEFAULT,
    attribute: "magic"
  },
  {
    name: "adept",
    priorities: SPECIAL_DEFAULT,
    attribute: "magic"
  },
  {
    name: "technomancer",
    priorities: SPECIAL_DEFAULT,
    type: "resonance"
  },
]

export default SPECIAL_PRIORITIES