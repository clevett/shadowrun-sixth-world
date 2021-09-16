import { selector } from "recoil"

import {
  WITH_HISTORY,
  CHARACTER_HISTORY,
  CHARACTER_PRIORITIES,
} from "../index"

import { GET_PRIORITIES } from "./withPriorities"

export const GET_CHARACTER = selector({
  key: 'GET_CHARACTER',
  get: ({get}) => {
    return {
      id: 1,
      history: { 
        ...get(WITH_HISTORY.CHARACTER_CREATION_HISTORY), 
        ...{outlook: get(WITH_HISTORY.CHARACTER_CREATION_OUTLOOK)}
      },
      name: "Rocinante",
      metatype: get(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_METATYPE),
      role: get(CHARACTER_HISTORY.CHARACTER_CREATION_ROLE),
      special: get(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_SPECIAL),
      priorities: get(GET_PRIORITIES),
    };
  },
});
