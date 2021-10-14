import { atom } from "recoil"
import memoize from '../../utilities/memoize'
import { ATTRIBUTES_DEFAULTS } from '../../data/metatype'

export const base = memoize(( id: string, value = 1 ) => atom({
  key:`CHARACTER_ATTRIBUTE_${id}_BASE`,
  default: value
}))

export const adjustment = memoize(( id: string ) => atom({
  key:`CHARACTER_ATTRIBUTE_${id}_ADJUSTMENT`,
  default: 0
}))

export const augmented = memoize(( id: string ) => atom({
  key:`CHARACTER_ATTRIBUTE_${id}_AUGMENTED`,
  default: 0
}))

export const min = memoize(( id: string ) => atom({
  key:`CHARACTER_ATTRIBUTE_${id}_MIN`,
  default: 1
}))

export const max = memoize(( id: string ) => atom({
  key:`CHARACTER_ATTRIBUTE_${id}_MAX`,
  default: 6
}))

export const CHARACTER_ATTRIBUTE_EDGE_BASE = atom({
  key: 'CHARACTER_ATTRIBUTE_EDGE_BASE',
  default: ATTRIBUTES_DEFAULTS["edge"].base
})

export const CHARACTER_ATTRIBUTES_AT_MAX = atom({
  key: 'CHARACTER_ATTRIBUTES_AT_MAX',
  default: ["edge"]
})