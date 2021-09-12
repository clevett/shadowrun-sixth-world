import { atom, selector } from "recoil"
import { CHARACTER_ROLES } from "../helpers/index"

export const CHARACTER_CREATION_ROLE = atom({
  key: 'CHARACTER_CREATION_ROLE',
  default: CHARACTER_ROLES[0]
})

export const CHARACTER_CREATION_OUTLOOK = atom({
  key: 'CHARACTER_CREATION_OUTLOOK',
  default: {
    injustice: null,
    substances: null,
    trafficking: null,
    wetwork: null,
  }
})

export const CHARACTER_CREATION_HISTORY = atom({
  key: 'CHARACTER_CREATION_HISTORY',
  default: {
    birth: null,
    raised: null,
    trained: null,
    now: null,
  }
})

export const GET_CHARACTER = selector({
  key: 'BUILD_CHARACTER',
  get: ({get}) => {
    return {
      id: 1,
      name: "Rocinante",
      history: get(CHARACTER_CREATION_HISTORY),
      role: get(CHARACTER_CREATION_ROLE),
    };
  },
});
