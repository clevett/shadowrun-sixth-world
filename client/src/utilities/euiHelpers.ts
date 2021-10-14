export const buildOption = (text:string | number, value: string | number = text) => ({ text, value })

export const buildMetatypeOption = ( metatype: Metatype ) => ({ text: metatype.name, value: metatype })