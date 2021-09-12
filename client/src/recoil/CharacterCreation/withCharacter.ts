import { selector } from "recoil"

import {
  CHARACTER_CREATION_HISTORY_BIRTH,
  CHARACTER_CREATION_HISTORY_NOW,
  CHARACTER_CREATION_HISTORY_RAISED,
  CHARACTER_CREATION_HISTORY_TRAINED,
  CHARACTER_CREATION_OUTLOOK,
  CHARACTER_CREATION_ROLE,
} from "../index"

export const GET_CHARACTER = selector({
  key: 'GET_CHARACTER',
  get: ({get}) => {
    return {
      id: 1,
      name: "Rocinante",
      history: {
        birth: get(CHARACTER_CREATION_HISTORY_BIRTH),
        raised: get(CHARACTER_CREATION_HISTORY_RAISED),
        trained: get(CHARACTER_CREATION_HISTORY_TRAINED),
        now: get(CHARACTER_CREATION_HISTORY_NOW),
        outlook: get(CHARACTER_CREATION_OUTLOOK)
      },
      role: get(CHARACTER_CREATION_ROLE),
    };
  },
});
