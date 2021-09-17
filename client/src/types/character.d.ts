type MinMax = { min: number, max: number }

type AttributeCoreNames = "agility" |"body" |"charisma" | "intuition" |"logic" |"reaction" |"strength" | "willpower" 

type AttributeNames = AttributeCoreNames | SpecialAttributes |"edge"

type Attributes<T = MinMax> = {
  agility: MinMax,
  body: MinMax, 
  charisma: MinMax,
  edge: MinMax,
  intuition: MinMax,
  logic: MinMax,
  magic: MinMax,
  reaction: MinMax,
  resonance: MinMax,
  strength: MinMax,
  willpower: MinMax,
}

type AttributesNumerical = Attributes<number>

type History = {
  birth: NullableString,
  raised: NullableString,
  trained: NullableString,
  now: NullableString,
  outlook: Outlook
}

type Metatype = {
  name: string,
  adjustment_points: IntegerPriority,
  attributes: Attributes,
  qualities: NullableStringArray,
}

type Outlook = {
  injustice: NullableString
  substances: NullableString,
  trafficking: NullableString,
  wetwork: NullableString,
}

type Priorities<T = number> = { [key in PriorityLetters]: T }

type PriorityLetters = "A" | "B" | "C" | "D" | "E"

type PrioritiesNames = "Attributes" | "Adjustment Points" |  "Skills" | "Special" | "Resources"

type PrioritiesMap = { [key in PrioritiesNames]: number }
interface PrioritiesNumerical extends PrioritiesMap {
  name: keyof Priorities  
}

type SpecialAttributes = "magic" | "resonance"

type Special = {
  name: SpecialTypes,
  priorities: Priorities,
  attribute: SpecialAttributes
}

type Character = {
  id: number,
  attributes: Attributes
  history: History,
  metatype: Metatype,
  name: NullableString,
  outlook: Outlook,
  priorities: Priorities<PrioritiesNames>,
  role: NullableString,
}
