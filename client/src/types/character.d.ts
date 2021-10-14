type MinMax = { 
  min: number, 
  max: number
}

type AttributeCoreNames = "agility" |"body" |"charisma" | "intuition" |"logic" |"reaction" |"strength" | "willpower" 

type AttributeNames = AttributeCoreNames | SpecialAttributes |"edge"

type AttributesCore = { [key in AttributeCoreNames]: number }

type Attribute = {
  name: string,
  adjustment: number,
  augmented: number,
  base: number,
  max: number,
  min: number,
}

type Attributes = {
  agility: Attribute,
  body: Attribute, 
  charisma: Attribute,
  edge: Attribute,
  intuition: Attribute,
  logic: Attribute,
  magic: Attribute,
  reaction: Attribute,
  resonance: Attribute,
  strength: Attribute,
  willpower: Attribute,
}

type AttributesBase = {
  name: string,
  base: number
}

type AttributesAdjustment = {
  name: string,
  adjustment: number
}

type History = {
  birth: NullableString,
  raised: NullableString,
  trained: NullableString,
  now: NullableString,
  outlook: Outlook
}

type MetatypeAttribute = {
  name: string,
  max: number,
  min: number,
}

type Metatype = {
  name: string,
  adjustment_points: IntegerPriority,
  attributes: MetatypeAttribute[],
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
  name: string,
  priorities: Priorities | null,
  attribute: SpecialAttributes | null
}

type Character = {
  id: number,
  attributes: Attributes
  history: History,
  metatype: Metatype,
  name: NullableString,
  outlook: Outlook,
  priorities: Priorities<PrioritiesNames>,
  special: Special | null,
  role: NullableString,
}
