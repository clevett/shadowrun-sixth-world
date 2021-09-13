declare module "character-types" {
  type NullableBoolean = boolean | null

  type NullableNumber = number | null

  type NullableString = string | null

  type MinMax = { min: number, max: number }

  type Attribute = {
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

  type Outlook = {
    injustice: NullableString
    substances: NullableString,
    trafficking: NullableString,
    wetwork: NullableString,
  }

  type History = {
    birth: NullableString,
    raised: NullableString,
    trained: NullableString,
    now: NullableString,
    outlook: Outlook
  }

  type Character = {
    id: number,
    name: NullableString,
    history: History,
    role: NullableString,
  }
}