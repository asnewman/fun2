export function moveRight(columnIdx, lineLength) {
  return { columnIdx: Math.min(lineLength + 1, columnIdx + 1) };
}

export function moveLeft(columnIdx) {
  return { columnIdx: Math.max(0, columnIdx - 1) };
}
