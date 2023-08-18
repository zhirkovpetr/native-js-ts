export const sum = (a: number, b: number) => {
  return a + b
}

export const mult = (a: number, b: number) => {
  return a * b
}
export const splitIntoWorlds = (sentence: string) => {
  const worlds = sentence.toLowerCase().split(' ')
  return worlds.map((el)=> el.replace('!', '').replace('.', '').replace(',', '') )
    .filter((el) => el !== '' && el !== '-')

}
