export function getWordInCorrectNumber(count: number, word: string) {
  return count > 1 ? `${word}s` : word;
}

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
