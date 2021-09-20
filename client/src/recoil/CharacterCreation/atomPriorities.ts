
import { atom } from "recoil"
import { METATYPE, PRIORITIES, SPECIAL } from "../../data"

export const CHARACTER_CREATION_PRIORITY_METATYPE = atom({
  key: 'CHARACTER_CREATION_PRIORITY_METATYPE',
  default: METATYPE.ATTRIBUTES[0]
})

export const CHARACTER_CREATION_PRIORITY_SPECIAL = atom({
  key: 'CHARACTER_CREATION_PRIORITY_SPECIAL',
  default: SPECIAL.defaultAttribute
})

export const CHARACTER_CREATION_PRIORITY_A = atom({
  key: 'CHARACTER_CREATION_PRIORITY_A',
  default: PRIORITIES.OPTIONS.attributes
})

export const CHARACTER_CREATION_PRIORITY_B = atom({
  key: 'CHARACTER_CREATION_PRIORITY_B',
  default: PRIORITIES.OPTIONS.skills
})

export const CHARACTER_CREATION_PRIORITY_C = atom({
  key: 'CHARACTER_CREATION_PRIORITY_C',
  default: PRIORITIES.OPTIONS.adjustment
})

export const CHARACTER_CREATION_PRIORITY_D = atom({
  key: 'CHARACTER_CREATION_PRIORITY_D',
  default: PRIORITIES.OPTIONS.resources
})

export const CHARACTER_CREATION_PRIORITY_E = atom({
  key: 'CHARACTER_CREATION_PRIORITY_E',
  default: PRIORITIES.OPTIONS.special
})
