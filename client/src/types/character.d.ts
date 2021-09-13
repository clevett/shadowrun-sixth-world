
type NullableBoolean = boolean | null
type NullableNumber = number | null
type NullableString = string | null
type NullableStringArray = string[] | null

type MinMax = { min: number, max: number }

type AttributeNames = "agility" |"body" |"charisma" |"edge" |"intuition" |"logic" |"reaction" |"strength" | "willpower"

type Attributes = {
  agility: MinMax,
  body: MinMax, 
  charisma: MinMax,
  edge: MinMax,
  intuition: MinMax,
  logic: MinMax,
  reaction: MinMax,
  strength: MinMax,
  willpower: MinMax,
}

type AdjustmentPoints = {
  A: NullableNumber,
  B: NullableNumber,
  C: NullableNumber,
  D: NullableNumber,
  E: NullableNumber
}

type History = {
  birth: NullableString,
  raised: NullableString,
  trained: NullableString,
  now: NullableString,
  outlook: Outlook
}

type Metatype = {
  name: string,
  adjustment_points: AdjustmentPoints,
  attributes: Attributes,
  qualities: NullableStringArray,
}

type Outlook = {
  injustice: NullableString
  substances: NullableString,
  trafficking: NullableString,
  wetwork: NullableString,
}

type Character = {
  id: number,
  name: NullableString,
  history: History,
  role: NullableString,
}
