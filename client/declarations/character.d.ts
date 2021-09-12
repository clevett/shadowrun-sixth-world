declare module "@bishada/character-types" {
  type NullableBoolean = boolean | null

  type NullableNumber = number | null

  type NullableString = string | null

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