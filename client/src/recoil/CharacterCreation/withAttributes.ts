import { selector } from "recoil"

import { ATOM } from "../index"

export const GET_CHARACTER_ATTRIBUTES = selector({
  key: 'GET_CHARACTER_ATTRIBUTES',
  get: ({ get }) => {
    return {
      agility: get( ATOM.characterAttribute(`AGILITY`) ),
      body: get( ATOM.characterAttribute(`BODY`) ), 
      charisma: get( ATOM.characterAttribute(`CHARISMA` )),
      intuition: get( ATOM.characterAttribute(`INTUITION`) ),
      logic: get( ATOM.characterAttribute(`LOGIC`) ),
      reaction: get( ATOM.characterAttribute(`REACTION`) ),
      strength: get( ATOM.characterAttribute(`STRENGTH`) ),
      willpower: get( ATOM.characterAttribute(`WILLPOWER` )),
    }
  }
})

export const GET_ALL_CHARACTER_ATTRIBUTES = selector({
  key: 'GET_ALL_CHARACTER_ATTRIBUTES',
  get: ({ get }) => {
    return {
      agility: get( ATOM.characterAttribute(`AGILITY`) ),
      body: get( ATOM.characterAttribute(`BODY`) ), 
      charisma: get( ATOM.characterAttribute(`CHARISMA` )),
      edge: get( ATOM.characterAttribute(`EDGE`) ),
      intuition: get( ATOM.characterAttribute(`INTUITION`) ),
      logic: get( ATOM.characterAttribute(`LOGIC`) ),
      magic: get( ATOM.characterAttribute(`MAGIC`) ),
      reaction: get( ATOM.characterAttribute(`REACTION`) ),
      resonance: get( ATOM.characterAttribute(`RESONANCE`) ),
      strength: get( ATOM.characterAttribute(`STRENGTH`) ),
      willpower: get( ATOM.characterAttribute(`WILLPOWER` )),
    }
  }
})