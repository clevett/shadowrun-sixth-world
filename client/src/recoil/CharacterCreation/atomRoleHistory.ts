import { atom } from "recoil"
import { CHARACTER_ROLES } from "../../data/creation"

export const CHARACTER_CREATION_ROLE = atom({
  key: 'CHARACTER_CREATION_ROLE',
  default: CHARACTER_ROLES[0]
})

export const CHARACTER_CREATION_OUTLOOK_INJUSTICE = atom({
  key: 'CHARACTER_CREATION_OUTLOOK_INJUSTICE',
  default: ""
})

export const CHARACTER_CREATION_OUTLOOK_SUBSTANCES = atom({
  key: 'CHARACTER_CREATION_OUTLOOK_SUBSTANCES',
  default: ""
})

export const CHARACTER_CREATION_OUTLOOK_TRAFFICKING = atom({
  key: 'CHARACTER_CREATION_OUTLOOK_TRAFFICKING',
  default: ""
})

export const CHARACTER_CREATION_OUTLOOK_ASPECT = atom({
  key: 'CHARACTER_CREATION_OUTLOOK_ASPECT',
  default: ""
})

export const CHARACTER_CREATION_OUTLOOK_WETWORK = atom({
  key: 'CHARACTER_CREATION_OUTLOOK_WETWORK',
  default: ""
})

export const CHARACTER_CREATION_HISTORY_BIRTH = atom({
  key: 'CHARACTER_CREATION_HISTORY_BIRTH',
  default: ""
})

export const CHARACTER_CREATION_HISTORY_RAISED = atom({
  key: 'CHARACTER_CREATION_HISTORY_RAISED',
  default: ""
})

export const CHARACTER_CREATION_HISTORY_TRAINED = atom({
  key: 'CHARACTER_CREATION_HISTORY_TRAINED',
  default: ""
})

export const CHARACTER_CREATION_HISTORY_NOW = atom({
  key: 'CHARACTER_CREATION_HISTORY_NOW',
  default: ""
})

