import { selector } from "recoil"

import {
  CHARACTER_CREATION_HISTORY,
  CHARACTER_CREATION_OUTLOOK,
  CHARACTER_CREATION_ROLE,
  CHARACTER_CREATION_PRIORITIES_METATYPE,
  CHARACTER_CREATION_PRIORITIES_SPECIAL,
} from "../index"

import { WITH_PRIORITIES } from "./withPriorities"

export const WITH_CHARACTER = selector({
  key: 'WITH_CHARACTER',
  get: ({get}) => {
    return {
      id: 1,
      history: { 
        ...get(CHARACTER_CREATION_HISTORY), 
        ...{outlook: get(CHARACTER_CREATION_OUTLOOK)}
      },
      name: "Rocinante",
      metatype: get(CHARACTER_CREATION_PRIORITIES_METATYPE),
      role: get(CHARACTER_CREATION_ROLE),
      special: get(CHARACTER_CREATION_PRIORITIES_SPECIAL),
      priorities: get(WITH_PRIORITIES),
    };
  },
});
