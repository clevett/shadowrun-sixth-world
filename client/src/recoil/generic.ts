import { atom } from "recoil"
import memoize from '../utilities/memoize'

export const withId = memoize((id: any, value: any) => atom({
  key:`CHARACTER_${id}`,
  default: value
}))

export const characterAttribute = memoize(( id: any ) => atom({
  key:`CHARACTER_ATTRIBUTE_${id}`,
  default: 1
}))

export const withWeaponId = memoize((id: any, value: any) => atom({
  key:`CHARACTER_WEAPON_${id}`,
  default: value
}))

export const withQualityId = memoize((id: any, value: any) => atom({
  key:`CHARACTER_QUALITY_${id}`,
  default: value
}))