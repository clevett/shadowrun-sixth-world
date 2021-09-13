import { atom } from "recoil"

export const CHARACTER_CREATION_PRIORITIES_METATYPE = atom({
  key: 'CHARACTER_CREATION_PRIORITIES_METATYPE',
  default: "human"
})

export const CHARACTER_CREATION_PRIORITIES_SPECIAL = atom({
  key: 'CHARACTER_CREATION_PRIORITIES_SPECIAL',
  default: "mundane"
})