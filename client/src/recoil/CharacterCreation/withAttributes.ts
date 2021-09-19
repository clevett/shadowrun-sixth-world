import { selector } from "recoil"

import { CHARACTER_ATTRIBUTES } from "../index"

export const GET_CHARACTER_ATTRIBUTE_BODY = selector({
  key: 'GET_CHARACTER_ATTRIBUTE_BODY',
  get: ({ get }) => {
    return {
      name: 'body',
      adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`BODY`) ),
      augmented: get( CHARACTER_ATTRIBUTES.augmented(`BODY`) ),
      base: get( CHARACTER_ATTRIBUTES.base(`BODY`) ),
      max: get( CHARACTER_ATTRIBUTES.max(`BODY`) ),
      min: get( CHARACTER_ATTRIBUTES.min(`BODY`) ),
    }
  }
})

export const GET_CHARACTER_ATTRIBUTE_AGILITY = selector({
  key: 'GET_CHARACTER_ATTRIBUTE_AGILITY',
  get: ({ get }) => {
    return {
      name: 'agility',
      adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`AGILITY`) ),
      augmented: get( CHARACTER_ATTRIBUTES.augmented(`AGILITY`) ),
      base: get( CHARACTER_ATTRIBUTES.base(`AGILITY`) ),
      max: get( CHARACTER_ATTRIBUTES.max(`AGILITY`) ),
      min: get( CHARACTER_ATTRIBUTES.min(`AGILITY`) ),
    }
  }
})

export const GET_CHARACTER_ATTRIBUTE_STRENGTH = selector({
  key: 'GET_CHARACTER_ATTRIBUTE_STRENGTH',
  get: ({ get }) => {
    return {
      name: 'strength',
      adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`STRENGTH`) ),
      augmented: get( CHARACTER_ATTRIBUTES.augmented(`STRENGTH`) ),
      base: get( CHARACTER_ATTRIBUTES.base(`STRENGTH`) ),
      max: get( CHARACTER_ATTRIBUTES.max(`STRENGTH`) ),
      min: get( CHARACTER_ATTRIBUTES.min(`STRENGTH`) ),
    }
  }
})

export const GET_CHARACTER_ATTRIBUTE_REACTION = selector({
  key: 'GET_CHARACTER_ATTRIBUTE_REACTION',
  get: ({ get }) => {
    return {
      name: 'reaction',
      adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`REACTION`) ),
      augmented: get( CHARACTER_ATTRIBUTES.augmented(`REACTION`) ),
      base: get( CHARACTER_ATTRIBUTES.base(`REACTION`) ),
      max: get( CHARACTER_ATTRIBUTES.max(`REACTION`) ),
      min: get( CHARACTER_ATTRIBUTES.min(`REACTION`) ),
    }
  }
})

export const GET_CHARACTER_ATTRIBUTE_WILLPOWER = selector({
  key: 'GET_CHARACTER_ATTRIBUTE_WILLPOWER',
  get: ({ get }) => {
    return {
      name: 'willpower',
      adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`WILLPOWER`) ),
      augmented: get( CHARACTER_ATTRIBUTES.augmented(`WILLPOWER`) ),
      base: get( CHARACTER_ATTRIBUTES.base(`WILLPOWER`) ),
      max: get( CHARACTER_ATTRIBUTES.max(`WILLPOWER`) ),
      min: get( CHARACTER_ATTRIBUTES.min(`WILLPOWER`) ),
    }
  }
})

export const GET_CHARACTER_ATTRIBUTE_LOGIC = selector({
  key: 'GET_CHARACTER_ATTRIBUTE_LOGIC',
  get: ({ get }) => {
    return {
      name: 'logic',
      adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`LOGIC`) ),
      augmented: get( CHARACTER_ATTRIBUTES.augmented(`LOGIC`) ),
      base: get( CHARACTER_ATTRIBUTES.base(`LOGIC`) ),
      max: get( CHARACTER_ATTRIBUTES.max(`LOGIC`) ),
      min: get( CHARACTER_ATTRIBUTES.min(`LOGIC`) ),
    }
  }
})

export const GET_CHARACTER_ATTRIBUTE_INTUITION = selector({
  key: 'GET_CHARACTER_ATTRIBUTE_INTUITION',
  get: ({ get }) => {
    return {
      name: 'intuition',
      adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`INTUITION`) ),
      augmented: get( CHARACTER_ATTRIBUTES.augmented(`INTUITION`) ),
      base: get( CHARACTER_ATTRIBUTES.base(`INTUITION`) ),
      max: get( CHARACTER_ATTRIBUTES.max(`INTUITION`) ),
      min: get( CHARACTER_ATTRIBUTES.min(`INTUITION`) ),
    }
  }
})

export const GET_CHARACTER_ATTRIBUTE_CHARISMA = selector({
  key: 'GET_CHARACTER_ATTRIBUTE_CHARISMA',
  get: ({ get }) => {
    return {
      name: 'charisma',
      adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`CHARISMA`) ),
      augmented: get( CHARACTER_ATTRIBUTES.augmented(`CHARISMA`) ),
      base: get( CHARACTER_ATTRIBUTES.base(`CHARISMA`) ),
      max: get( CHARACTER_ATTRIBUTES.max(`CHARISMA`) ),
      min: get( CHARACTER_ATTRIBUTES.min(`CHARISMA`) ),
    }
  }
})

export const GET_CHARACTER_ATTRIBUTE_EDGE = selector({
  key: 'GET_CHARACTER_ATTRIBUTE_EDGE',
  get: ({ get }) => {
    return {
      name: 'edge',
      adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`EDGE`) ),
      augmented: get( CHARACTER_ATTRIBUTES.augmented(`EDGE`) ),
      base: get( CHARACTER_ATTRIBUTES.base(`EDGE`) ),
      max: get( CHARACTER_ATTRIBUTES.max(`EDGE`) ),
      min: get( CHARACTER_ATTRIBUTES.min(`EDGE`) ),
    }
  }
})

export const GET_CHARACTER_ATTRIBUTE_MAGIC = selector({
  key: 'GET_CHARACTER_ATTRIBUTE_MAGIC',
  get: ({ get }) => {
    return {
      name: 'magic',
      adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`MAGIC`) ),
      augmented: get( CHARACTER_ATTRIBUTES.augmented(`MAGIC`) ),
      base: get( CHARACTER_ATTRIBUTES.CHARACTER_ATTRIBUTE_MAGIC_BASE ),
      max: get( CHARACTER_ATTRIBUTES.max(`MAGIC`) ),
      min: get( CHARACTER_ATTRIBUTES.min(`MAGIC`) ),
    }
  }
})

export const GET_CHARACTER_ATTRIBUTE_RESONANCE = selector({
  key: 'GET_CHARACTER_ATTRIBUTE_RESONANCE',
  get: ({ get }) => {
    return {
      name: 'resonance',
      adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`RESONANCE`) ),
      augmented: get( CHARACTER_ATTRIBUTES.augmented(`RESONANCE`) ),
      base: get( CHARACTER_ATTRIBUTES.CHARACTER_ATTRIBUTE_RESONANCE_BASE ),
      max: get( CHARACTER_ATTRIBUTES.max(`RESONANCE`) ),
      min: get( CHARACTER_ATTRIBUTES.min(`RESONANCE`) ),
    }
  }
})

export const GET_CHARACTER_BASE_ATTRIBUTES = selector({
  key: "GET_CHARACTER_BASE_ATTRIBUTES",
  get: ({ get }) => {
    return [
      {
        name: 'body',
        base: get( CHARACTER_ATTRIBUTES.base(`BODY`) ),
      },
      {
        name: 'agility',
        base: get( CHARACTER_ATTRIBUTES.base(`AGILITY`) ),
      },
      {
        name: 'strength',
        base: get( CHARACTER_ATTRIBUTES.base(`STRENGTH`) ),
      },
      {
        name: 'reaction',
        base: get( CHARACTER_ATTRIBUTES.base(`REACTION`) ),
      },
      {
        name: 'willpower',
        base: get( CHARACTER_ATTRIBUTES.base(`WILLPOWER`) ),
      },
      {
        name: 'logic',
        base: get( CHARACTER_ATTRIBUTES.base(`LOGIC`) ),
      },
      {
        name: 'intuition',
        base: get( CHARACTER_ATTRIBUTES.base(`INTUITION`) ),
      },
      {
        name: 'charisma',
        base: get( CHARACTER_ATTRIBUTES.base(`CHARISMA`) ),
      },
      {
        name: 'edge',
        base: get( CHARACTER_ATTRIBUTES.base(`EDGE`) ),
      },
      {
        name: 'magic',
        base: get( CHARACTER_ATTRIBUTES.base(`MAGIC`) ),
      },
      {
        name: 'resonance',
        base: get( CHARACTER_ATTRIBUTES.base(`RESONANCE`) ),
      },
    ]
  }
})

export const GET_CHARACTER_ADJUSTMENT_ATTRIBUTES = ({
  key: "GET_CHARACTER_ADJUSTMENT_ATTRIBUTES",
  //@ts-expect-error get show error
  get: ({ get }) => {
    return [
      {
        name: 'body',
        adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`BODY`) ),
      },
      {
        name: 'agility',
        adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`AGILITY`) ),
      },
      {
        name: 'strength',
        adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`STRENGTH`) ),
      },
      {
        name: 'reaction',
        adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`REACTION`) ),
      },
      {
        name: 'willpower',
        adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`WILLPOWER`) ),
      },
      {
        name: 'logic',
        adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`LOGIC`) ),
      },
      {
        name: 'intuition',
        adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`INTUITION`) ),
      },
      {
        name: 'charisma',
        adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`CHARISMA`) ),
      },
      {
        name: 'edge',
        adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`EDGE`) ),
      },
      {
        name: 'magic',
        adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`MAGIC`) ),
      },
      {
        name: 'resonance',
        adjustment: get( CHARACTER_ATTRIBUTES.adjustment(`RESONANCE`) ),
      },
    ]
  }
})

export const GET_CHARACTER_ATTRIBUTES = selector({
  key: 'GET_CHARACTER_ATTRIBUTES',
  get: ({ get }) => {
    return [
      get(GET_CHARACTER_ATTRIBUTE_BODY),
      get(GET_CHARACTER_ATTRIBUTE_AGILITY),
      get(GET_CHARACTER_ATTRIBUTE_STRENGTH),
      get(GET_CHARACTER_ATTRIBUTE_REACTION),
      get(GET_CHARACTER_ATTRIBUTE_WILLPOWER),
      get(GET_CHARACTER_ATTRIBUTE_LOGIC),
      get(GET_CHARACTER_ATTRIBUTE_INTUITION),
      get(GET_CHARACTER_ATTRIBUTE_CHARISMA),
      get(GET_CHARACTER_ATTRIBUTE_EDGE),
      get(GET_CHARACTER_ATTRIBUTE_MAGIC),
      get(GET_CHARACTER_ATTRIBUTE_RESONANCE)
    ]
  }
})