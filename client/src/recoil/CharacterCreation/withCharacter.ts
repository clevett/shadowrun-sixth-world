import { selector } from "recoil"

import {
  CHARACTER_HISTORY,
  CHARACTER_PRIORITIES,
  WITH_ATTRIBUTES,
  WITH_HISTORY,
  WITH_PRIORITIES,
} from "../index"

export const GET_CHARACTER = selector({
  key: 'GET_CHARACTER',
  get: ({get}) => {
    return {
      id: 1,
      attributes: get(WITH_ATTRIBUTES.GET_CHARACTER_ATTRIBUTES),
      history: { 
        ...get(WITH_HISTORY.CHARACTER_CREATION_HISTORY), 
        ...{outlook: get(WITH_HISTORY.CHARACTER_CREATION_OUTLOOK)}
      },
      name: "Rocinante",
      metatype: get(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_METATYPE),
      role: get(CHARACTER_HISTORY.CHARACTER_CREATION_ROLE),
      special: get(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_SPECIAL),
      priorities: get(WITH_PRIORITIES.GET_PRIORITIES),
    };
  },
});
