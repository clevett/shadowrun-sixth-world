export const convertIntIntoNuyen = (value: number) => {
  const formatter = new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
  });

  return formatter.format(value)
}