import { atom } from "recoil"
import memoize from '../../utilities/memoize'
import { ATTRIBUTES_DEFAULTS } from '../../data/metatype'

export const base = memoize(( id: string ) => atom({
  key:`CHARACTER_ATTRIBUTE_${id}_BASE`,
  //@ts-expect-error ts hates indexing with strings
  default: ATTRIBUTES_DEFAULTS[id.toLowerCase()].min
}))

export const adjustment = memoize(( id: string ) => atom({
  key:`CHARACTER_ATTRIBUTE_${id}_ADJUSTMENT`,
  //@ts-expect-error ts hates indexing with strings
  default: ATTRIBUTES_DEFAULTS[id.toLowerCase()].adjustment
}))

export const augmented = memoize(( id: string ) => atom({
  key:`CHARACTER_ATTRIBUTE_${id}_AUGMENTED`,
  //@ts-expect-error ts hates indexing with strings
  default: ATTRIBUTES_DEFAULTS[id.toLowerCase()].augmented
}))

export const min = memoize(( id: string ) => atom({
  key:`CHARACTER_ATTRIBUTE_${id}_MIN`,
  //@ts-expect-error ts hates indexing with strings
  default: ATTRIBUTES_DEFAULTS[id.toLowerCase()].min
}))

export const max = memoize(( id: string, value = 6 ) => atom({
  key:`CHARACTER_ATTRIBUTE_${id}_MAX`,
  //@ts-expect-error ts hates indexing with strings
  default: ATTRIBUTES_DEFAULTS[id.toLowerCase()].max
}))

export const CHARACTER_ATTRIBUTE_EDGE_BASE = atom({
  key: 'CHARACTER_ATTRIBUTE_EDGE_BASE',
  default: ATTRIBUTES_DEFAULTS["edge"].base
})

export const CHARACTER_ATTRIBUTE_MAGIC_BASE = atom({
  key: 'CHARACTER_ATTRIBUTE_MAGIC_BASE',
  default: ATTRIBUTES_DEFAULTS["magic"].base
})

export const CHARACTER_ATTRIBUTE_RESONANCE_BASE = atom({
  key: 'CHARACTER_ATTRIBUTE_RESONANCE_BASE',
  default: ATTRIBUTES_DEFAULTS["resonance"].base
})

export const CHARACTER_ATTRIBUTES_AT_MAX = atom({
  key: 'CHARACTER_ATTRIBUTES_AT_MAX',
  default: ["edge"]
})