import { METATYPE_ATTRIBUTES } from "../metatype"
import { MinMax } from "@types/character"

//import { GearTools } from "@/types/Resources"

export const maxMinFactory = (max = 6, min = 1) => ( { min, max } )

export const attributeFactory = ({ 
    body,
    agility, 
    reaction, 
    strength, 
    willpower,
    logic, 
    intuition, 
    charisma, 
    edge 
  }: attributeType) => {

  return {
    agility: agility ?? maxMinFactory(agility),
    body: body ?? maxMinFactory(body),
    charisma: charisma ?? maxMinFactory(charisma),
    edge: edge ?? maxMinFactory(edge),
    intuition: intuition ?? maxMinFactory(intuition),
    logic: logic ?? maxMinFactory(logic),
    reaction: reaction ?? maxMinFactory(reaction),
    strength: strength ?? maxMinFactory(strength),
    willpower: willpower ?? maxMinFactory(willpower),
  }
}

export const adjustmentPointsFactory = ({A, B, C, D, E}) => {
  return {

  }
}


type attributeType = {
  agility?: MinMax,
  body?: MinMax, 
  charisma?: MinMax,
  edge?: MinMax,
  intuition?: MinMax,
  logic?: MinMax,
  reaction?: MinMax,
  strength?: MinMax,
  willpower?: MinMax,
}