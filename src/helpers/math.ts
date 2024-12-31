export const getIntArray = (min: number, max: number) => {
  const result: number[] = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
};

export const getRandomIntArrayInRange = (
  min: number,
  max: number,
  count: number
) => {
    const range = Array.from({ length: max - min + 1 }, (_, idx) => min + idx);
    for (let i = range.length - 1; i > 0; i--) {
      const randomIdx = Math.floor(Math.random() * (i + 1));
      [range[i], range[randomIdx]] = [range[randomIdx], range[i]];
    }
    
    return range.slice(0, count);
};
