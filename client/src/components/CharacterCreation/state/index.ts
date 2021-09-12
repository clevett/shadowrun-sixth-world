import { atom } from "recoil"
import { CHARACTER_ROLES } from "../helpers/index"

export const characterRole = atom({
  key: 'characterRole',
  default: CHARACTER_ROLES[0]
})