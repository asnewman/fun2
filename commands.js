export function command(command, store) {
}

export function moveRight(columnIdx, lineLength) {
  return { columnIdx: Math.min(lineLength + 1, columnIdx + 1) };
}

export function moveLeft(columnIdx) {
  return { columnIdx: Math.max(0, columnIdx - 1) };
}

export function moveUp(currLineIdx, currColumnIdx, prevLineLength) {
  return { lineIdx: Math.max(currLineIdx - 1, 0), columnIdx: Math.min(currColumnIdx, prevLineLength) } 
}

export function moveDown(currLineIdx, currColumnIdx, nextLineLength, lastLineIdx) {
  return { lineIdx: Math.min(currLineIdx + 1, lastLineIdx), columnIdx: Math.min(currColumnIdx, nextLineLength) } 
}

export function moveWord(lines, lineIdx, cursorIdx) {
  const subLines = lines.splice(lineIdx)

  let newLineIdx = lineIdx
  let newCursorIdx = cursorIdx

  return { cursorIdx: newCursorIdx, lineIdx: newLineIdx }
}
