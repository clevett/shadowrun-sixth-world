import { selector } from "recoil"

import { CHARACTER_HISTORY } from ".."

export const CHARACTER_CREATION_HISTORY = selector({
  key: "CHARACTER_CREATION_HISTORY",
  get: ({ get }) => {
    return  {
      birth: get(CHARACTER_HISTORY.CHARACTER_CREATION_HISTORY_BIRTH),
      raised: get(CHARACTER_HISTORY.CHARACTER_CREATION_HISTORY_RAISED),
      trained: get(CHARACTER_HISTORY.CHARACTER_CREATION_HISTORY_TRAINED),
      now: get(CHARACTER_HISTORY.CHARACTER_CREATION_HISTORY_NOW),
    }
  }
})

export const CHARACTER_CREATION_OUTLOOK = selector({
  key:"CHARACTER_CREATION_OUTLOOK",
  get: ({ get }) => {
    return {
      injustice: get(CHARACTER_HISTORY.CHARACTER_CREATION_OUTLOOK_INJUSTICE),
      substances: get(CHARACTER_HISTORY.CHARACTER_CREATION_OUTLOOK_SUBSTANCES),
      trafficking: get(CHARACTER_HISTORY.CHARACTER_CREATION_OUTLOOK_TRAFFICKING),
      wetwork: get(CHARACTER_HISTORY.CHARACTER_CREATION_OUTLOOK_WETWORK),
    }
  }
})
